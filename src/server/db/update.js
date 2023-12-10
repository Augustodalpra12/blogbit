module.exports = (db) => {
    return {
        update_post_with_id: async function(id, data) {
            const columns = []

            if(data.name !== undefined){
                columns.push('name')
            }

            if(data.content !== undefined){
                columns.push('content')
            }

            if(data.category !== undefined){
                columns.push('category')
            }

            if(data.image !== undefined){
                columns.push('image')
            }

            await db`UPDATE posts SET ${db(data, columns)} WHERE id=${id}`

        }
    }
}

