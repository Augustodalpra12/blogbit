module.exports = (db) => {
    return {
        update_file_with_id: async function(id, data) {
            if(data.name !== null && data.content !== null){
                await db`UPDATE posts SET name=${data.name}, content=${data.content} WHERE id=${id}`
            } else if(data.name !== null){
                await db`UPDATE posts SET name=${data.name} WHERE id=${id}`
            } else if(data.content !== null){
                await db`UPDATE posts SET content=${data.content} WHERE id=${id}`
            }
        }
    }
}

