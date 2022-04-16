const { Client } = require('pg')
const postgresClient = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'test',
    port: 5432,
})
postgresClient.connect(function(err) {
    if (err) throw err;
    const date = new Date();
    console.log(`${date.toLocaleString()} | Connected to postgres data base!`);
});

module.exports = {postgresClient}