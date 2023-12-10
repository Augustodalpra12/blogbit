module.exports = (db_funcs, pre_url, fs, dir) => {
    return {
        error_enum: {
            success: 'success',
            post_doesnt_exist: 'post doesnt exist',
            title_cant_be_empty: 'title cant be empty',
            post_with_title_already_exists: 'post with this title already exists',
            image_delete_failure: 'failure deleting old image'
        },

        handle: async function(post_id, name, content, category, image){
            let error_enum = this.error_enum

            let post_data1 = await db_funcs.fetch_post(post_id)

            if(post_data1 === null){
                return error_enum.post_doesnt_exist
            }

            if(name.length <= 0){
                return error_enum.title_cant_be_empty
            }

            let post_data2 = await db_funcs.fetch_post_with_name(name);

            if(post_data2 !== null && post_data1['name'] !== post_data2['name']){
                return error_enum.post_with_title_already_exists 
            }

            let data = {
                name: name,
                content: content,
                category: category
            }

            if(image !== undefined){
                data.image = pre_url + image.filename
            }

            let file_name = post_data1['image'].split('/').pop()

            fs.unlink(`${dir}/${file_name}`, (err) => {
                if(err){
                    return error_enum.image_delete_failure
                }
            })

            db_funcs.update_post_with_id(post_id, data)

            return error_enum.success
        }
    }
}

