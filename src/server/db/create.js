module.exports = (db) => {
    return {
        create_table: async function(){
            await db`CREATE TABLE IF NOT EXISTS posts (
                id SERIAL PRIMARY KEY, 
                name varchar(255) NOT NULL,
                content varchar(1000) NOT NULL,
                category varchar(255) NOT NULL,
                image varchar(255) NOT NULL,
                date INT NOT NULL
            )` 
        },

        insert_post: async function(data) {
            await db`INSERT INTO posts (name, content, category, image, date) VALUES(${data.name}, ${data.content}, ${data.category}, ${data.image}, ${Date.now()})`
        }
    }
}

