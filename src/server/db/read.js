module.exports = (db) => {
    return {
        fetch_post: async function(id) {
            let post

            try{
                post = await db`SELECT * FROM posts WHERE id=${id}`
            } catch(e){
                return null
            }

            if(post.length === 0){
                return null
            }

            post = post[0]
            
            return post
        },

        fetch_post_with_name: async function(name){
            let post = await db`SELECT * FROM posts WHERE name=${name}`

            if(post.length === 0){
                return null
            }

            post = post[0]
            
            return post
        },

        fetch_all_posts: async function(){
            return await db`SELECT * FROM posts ORDER by id`
        },

        fetch_all_posts_with_category_like: async function(cat){
            return await db`SELECT * FROM posts WHERE category LIKE ${cat + '%'}`
        },

        fetch_all_categories: async function(){
            return await db`SELECT DISTINCT category FROM posts`
        }
    }
}
