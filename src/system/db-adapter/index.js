const {Client} = require('pg');
const {exec} = require('child_process');
const {DbError} = require('../system-errors');

class DbAdapter {
    constructor() {
        this.client = new Client({
            user: 'postgres',
            host: 'localhost',
            database: 'postgres',
            password: 'test',
            port: 5432,
        });

        this.connectPostgres();
        this.runMigrations();
    }

    async connectPostgres() {
        await this.client.connect(err => {
            if (err) {
                throw new DbError(err.message);
            }
            console.log('SYSTEM [INFO] Connected to postgres data base!');
        });
    }

    async runMigrations() {
        await exec(`/bin/sh ${__dirname}/migration-runner.sh`, (error, stdout, stderr) => {
            if (stdout) {
                console.log('SYSTEM', stdout);
            }
            if (stderr) {
                console.log('SYSTEM [INFO]', stderr);
            }
            if (error !== null) {
                console.log(`SYSTEM [ERROR]: exec error: ${error}`);
            }
        });
    }

    async execQuery(query) {
        const {queryName, values} = query;

        await this.client.query(queryName, values, (err, res) => {
            if (err) {
                throw new DbError(err.message);
            }
            return res;
        });
    }
}


module.exports = {DbAdapter};
