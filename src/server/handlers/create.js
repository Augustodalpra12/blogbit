module.exports = (db_funcs) => {
    return {
        error_enum: {
            success: 'success',
            post_already_exists: 'post already exists'
        },

        handle: async function(name, content, image){
            let error_enum = this.error_enum

            if(db_funcs.fetch_post_with_name(name) !== null){
                return error_enum.post_already_exists
            }

            db_funcs.insert_post({
                name: name,
                content: content,
                image: image,
                category: 'test'
            })

            return error_enum.success
        }
    }
}
