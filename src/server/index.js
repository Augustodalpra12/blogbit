const cfg = require('./config')
const postgres = require('postgres')
const fs = require('fs')

const express = require('express')
const multer  = require('multer')

const path = require('path')

const app = express();

let database_functions = require('./db/setup')(postgres, cfg)

if(database_functions === null){
    console.log('Failure initializing the database')
    process.exit()
}

database_functions.create_table()

const read_handler = require('./handlers/read')(database_functions);
app.get('/api/posts', (req, res) => {
    read_handler.handle(null, null).then((result) => {
        res.send(result)  
    })
})

//aqui as categories nao sao exatas, se contem, aparece
app.get('/api/posts/:category', (req, res) => {
    read_handler.handle(null, 
        (req.params.category === 'undefined' ? null : req.params.category)
    ).then((result) => {
        res.send(result)  
    })
})

app.get('/api/post/:id', (req, res) => {
    let id = req.params.id
    
    read_handler.handle(id).then((result) => {
        res.send(result)  
    })
})

let upload_path = path.join(__dirname, 'uploads')

const delete_handler = require('./handlers/delete')(database_functions, fs, upload_path);
app.get('/api/post/:id/delete', (req, res) => {
    let id = req.params.id

    delete_handler.handle(id).then((result) => {
        res.send(result)
    })
})


app.get('/api/categories', (req, res) => {
    read_handler.handle_list_categories().then((result) => {
        res.send(result)
    })
})

const create_handler = require('./handlers/create')(database_functions);

const multer_cfg = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, upload_path) 
        },

        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
        }
    }),
    fileFilter: function (req, file, callback) {
        let ext = path.extname(file.originalname);

        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }

        callback(null, true)
    },
    limits:{
        fileSize: 1024 * 1024
    }
})

app.use('/uploads', express.static(upload_path))

app.post('/api/new-post', multer_cfg.single('file'), (req, res) => {
    create_handler.handle(req.body.name, req.body.content, req.body.category, req.file).then((result) => {
        let append = (result !== create_handler.error_enum.success) ? `?err=${result}` : '';

        return res.writeHead(301, {
            Location: `/${append}`
        }).end()
    })
})

app.listen(3001, () => {
  console.log(`Server is running now!`);
});
