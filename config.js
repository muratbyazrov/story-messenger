require('dotenv').config();
const {
    DB_USER,
    DB_HOST,
    DB_DATABASE,
    DB_PASSWORD,
    DB_PORT,
    HTTP_PORT,
    HTTP_PATH,
    WS_PORT,
} = process.env;

module.exports = {
    db: {
        user: DB_USER || 'postgres',
        host: DB_HOST || 'localhost',
        database: DB_DATABASE || 'postgres',
        password: DB_PASSWORD || 'test',
        port: DB_PORT || 5432,
    },
    http: {
        port: HTTP_PORT || 3000,
        path: HTTP_PATH || '/story-messenger-api/v1',
    },
    ws: {
        port: WS_PORT || 9000,
    },
};
