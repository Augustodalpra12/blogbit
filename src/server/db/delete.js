module.exports = (db) => {
    return {
        delete_post: async function(id) {
            try{
                await db`DELETE FROM posts WHERE id=${id}`

                return true
            }catch(e){
                return false
            }
        }
    }
}


