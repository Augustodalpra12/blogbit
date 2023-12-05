module.exports = (db_funcs, fs, dir) => {
    return {
        error_enum: {
            success: 'success',
            post_not_found: 'post not found',
            image_delete_failure: 'couldnt delete post image',
            delete_failure: 'couldnt delete post'
        },

        handle: async function(post_id){
            let error_enum = this.error_enum

            let post_data = await db_funcs.fetch_post(post_id)

            if(post_data === null){
                return error_enum.post_not_found
            }

            let file_name = post_data.image.split('/').pop()

            console.log(dir + file_name)

            fs.unlink(`${dir}/${file_name}`, (err) => {
                if(err){
                    return error_enum.image_delete_failure
                }
            })

            return (await db_funcs.delete_post(post_id)) ? error_enum.success : error_enum.delete_failure
        }
    }
}

