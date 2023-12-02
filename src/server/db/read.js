module.exports = (db) => {
    return {
        fetch_post: async function(id) {
            let post = await db`SELECT * FROM posts WHERE id=${id}`

            if(post.length === 0){
                return null
            }

            post = post[0]
            
            return post
        },

        fetch_all_posts: async function(){
            return await db`SELECT * FROM posts ORDER by id`
        },

        fetch_all_posts_with_category: async function(cat){
            return await db`SELECT * FROM posts WHERE category=${cat}`
        },

        fetch_all_categories: async function(){
            return await db`SELECT DISTINCT category FROM posts`
        }
    }
}
