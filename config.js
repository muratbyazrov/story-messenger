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
        user: DB_USER || 'story-messenger',
        host: DB_HOST || '127.10.10.28',
        database: DB_DATABASE || 'story-messenger',
        password: DB_PASSWORD || 'test',
        port: DB_PORT || 5432,
    },
    http: {
        port: HTTP_PORT || 3000,
        path: HTTP_PATH || '/story-messenger-api/v1',
        host: '127.0.0.1',
    },
    ws: {
        port: WS_PORT || 9000,
    },
};
