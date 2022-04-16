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

    getData() {
        const date = new Date();
        return `${date.toLocaleString()}`;
    }

    async connectPostgres() {
        await this.client.connect((err) => {
            if (err) throw err;
            console.log(`${this.getData()} | Connected to postgres data base!`);
        });
    }

    async runMigrations() {
        await exec(`/bin/sh ${__dirname}/migration-runner.sh`, (error, stdout, stderr) => {
            const now = new Date();
            const date = now.toLocaleString()
            console.log(`${date} | `, stdout);
            console.log(`${date} | `, stderr);
            if (error !== null) {
                console.log(`${date} | exec error: ${error}`);
            }
        })
    }

    execQuery(query) {
        return this.client.query(query, (err, res) => {
            if (err) {
                throw err
            }
            return res;
        })
    }
}


module.exports = {DbAdapter};