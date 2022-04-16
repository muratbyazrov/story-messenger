const {Client} = require('pg');
const {exec} = require('child_process');
const {connect} = require("db-migrate-pg");

const postgresClient = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'test',
    port: 5432,
});

postgresClient.connect((err) => {
    if (err) throw err;
    const now = new Date();
    const date = now.toLocaleString();
    console.log(`${date} | Connected to postgres data base!`);
});

exec(`/bin/sh ${__dirname}/migration-runner.sh`, (error, stdout, stderr) => {
    const now = new Date();
    const date = now.toLocaleString()
    console.log(`${date} | `, stdout);
    console.log(`${date} | `, stderr);
    if (error !== null) {
        console.log(`${date} | exec error: ${error}`);
    }
})

module.exports = {postgresClient};