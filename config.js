module.exports = {

    remoteDB: process.env.REMOTE_DB || false,

    api: {
        port: process.env.API_PORT || 3000,
    },
    post: {
        port: process.env.POST_PORT || 3002,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'YodNTK0ydv',
        password: process.env.MYSQL_PASS || 'v2MFRbHoBY',
        database: process.env.MYSQL_DB || 'YodNTK0ydv',
    },
    mysqlService: {
        port: process.env.MYSQL_SRV_PORT || 3001,
        host: process.env.MYSQL_SRV_HOST || 'localhost',        
    },
}