const cfg = require('./config')
const postgres = require('postgres')

const express = require('express')
const multer  = require('multer')

const fs = require('fs')

const app = express();

let database_functions = require('./db/setup')(postgres, cfg)

if(database_functions === null){
    console.log('Failure initializing the database')
    process.exit()
}

database_functions.create_table()

const read_handler = require('./handlers/read')(database_functions);
app.get('/api/posts/:category', (req, res) => {
    read_handler.handle(null, 
        (req.params.category === 'undefined' ? null: req.params.category)
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

app.get('/api/categories', (req, res) => {
    read_handler.handle_list_categories().then((result) => {
        res.send(result)  
    })
})

/*const create_handler = require('./handlers/create')(database_functions);
app.get('/api/posts', (req, res) => {
    read_handler.handle().then((result) => {
        res.send(result)  
    })
})*/

app.listen(3001, () => {
  console.log(`Server is running now!`);
});
