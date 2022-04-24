module.exports = {
    db: {
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'test',
        port: 5432,
    },
    http: {
        port: 3000,
        path: '/story-messenger-api/v1',
    },
    ws: {
        port: 9000,
    },
};
