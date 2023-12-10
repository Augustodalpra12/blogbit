module.exports = (db_funcs, pre_url) => {
    return {
        error_enum: {
            success: 'success',
            post_already_exists: 'post already exists',
            bad_file: 'bad file',
            bad_request: 'bad request',
            empty_details: 'empty details'
        },

        handle: async function(name, content, category, image){
            let error_enum = this.error_enum

            if(image === undefined){
                return error_enum.bad_file
            }

            if(name === undefined || content === undefined){
                return error_enum.bad_request 
            }

            let post_data = await db_funcs.fetch_post_with_name(name)

            if(post_data !== null){
                return error_enum.post_already_exists
            }

            if(name.length <= 0 || category.length <= 0){
                return error_enum.empty_details
            }

            db_funcs.insert_post({
                name: name,
                content: content,
                image: pre_url + image.filename,
                category: category
            })

            return error_enum.success
        }
    }
}
