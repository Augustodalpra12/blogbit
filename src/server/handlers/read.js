module.exports = (db_funcs) => {
    return {
        error_enum: {
            success: 'success',
            post_not_found: 'post not found'
        },

        handle: async function(post_id = null, category_id = null){
            let error_enum = this.error_enum

            if(post_id === null && category_id === null){
                return await db_funcs.fetch_all_posts()
            }

            if(post_id !== null){
                let post = await db_funcs.fetch_post(post_id)

                if(post === null){
                    return error_enum.post_not_found
                }
                
                return post
            }

            if(category_id !== null){
                return await db_funcs.fetch_all_posts_with_category(category_id)
            }

            return []
        },

        handle_list_categories: async function(){
            let cats = await db_funcs.fetch_all_categories()

            return cats.map(row => row.category)
        }
    }
}


