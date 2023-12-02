module.exports = (db) => {
    return {
        delete_post: async function(id) {
            await db`DELETE FROM posts WHERE id=${id}`
        }
    }
}


