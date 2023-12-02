module.exports = (db_funcs) => {
    return {
        error_enum: {
            success: 'success',
            post_not_found: 'post not found'
        },

        handle: async function(post_id = null){
            let error_enum = this.error_enum

            if(post_id === null){
                return await db_funcs.fetch_all_posts()
            }

            let post = await db_funcs.fetch_post(post_id)

            if(post === null){
                return error_enum.post_not_found
            }

            return post
        }
    }
}


