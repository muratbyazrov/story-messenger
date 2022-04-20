const {Client} = require('pg');
const {exec} = require('child_process');

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
                throw err;
            }
            console.log('SYSTEM >>>>>>>>>>: Connected to postgres data base!');
        });
    }

    async runMigrations() {
        await exec(`/bin/sh ${__dirname}/migration-runner.sh`, (error, stdout, stderr) => {
            console.log('SYSTEM >>>>>>>>>>:', stdout);
            console.log('SYSTEM >>>>>>>>>>:', stderr);
            if (error !== null) {
                console.log(`SYSTEM >>>>>>>>>>: exec error: ${error}`);
            }
        });
    }

    execQuery(query) {
        return this.client.query(query, (err, res) => {
            if (err) {
                throw err;
            }
            return res;
        });
    }
}


module.exports = {DbAdapter};
