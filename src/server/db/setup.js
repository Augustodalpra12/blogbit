module.exports = (postgres, cfg) => {
    try{
        const sql = postgres({
            host: cfg.DB_HOST,
            port: cfg.DB_PORT,
            database: cfg.DB_NAME,
            username: cfg.DB_USERNAME,
            password: cfg.DB_PASSWORD
        })

        return {
            db: sql,
            ...require('./create')(sql), 
            ...require('./read')(sql),
            ...require('./update')(sql),
            ...require('./delete')(sql)
        }
    } catch(error){
        return null
    }
}
