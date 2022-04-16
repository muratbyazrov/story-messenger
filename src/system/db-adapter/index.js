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
        this.setSchema();
        this.runMigrations();
    }

    async connectPostgres() {
        await this.client.connect((err) => {
            if (err) throw err;
            const now = new Date();
            const date = now.toLocaleString();
            console.log(`${date} | Connected to postgres data base!`);
        });
    }

    async setSchema() {
        await this.client.query('SET SEARCH_PATH = story_messenger;', (err, res) => {
            if (err) {
                console.log(err.stack)
            } else {
                console.log('>>>>>>>>>>.get result')
            }
        })
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
}


module.exports = {DbAdapter};