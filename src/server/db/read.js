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
        }

    }
}
