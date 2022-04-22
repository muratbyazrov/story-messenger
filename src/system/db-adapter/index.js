const {Client} = require('pg');
const {exec} = require('child_process');
const {DbError} = require('../system-errors');
const {Utils} = require('../utils');

class DbAdapter extends Utils {
    constructor() {
        super();
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

    async execQuery({queryName, params, unlock = true}) {
        const preparedQuery = this.getPreparedQuery(queryName, params, unlock);
        try {
            const res = await this.client.query(preparedQuery);
            return {positive: true, ...res.rows[0]};
        } catch (err) {
            this.error(err.message);
            return {
                positive: false,
                err,
            };
        }
    }

    getPreparedQuery(query, params, unlock) {
        let text = query;
        if (unlock) {
            text = this.unlockParams(text, params);
        }

        const values = [];
        let paramNum = 0;
        text = text
            .replace(/\:(\w+)/g, (text, placeholder) => {
                if (this.has(params, placeholder)) {
                    ++paramNum;
                    values.push(params[placeholder]);
                    return `$${paramNum}`;
                }

                return text;
            })
            .trim();

        return {text, values};
    }

    unlockParams(query, params) {
        let unlockedTemplate = query;

        for (const param in params) {
            if (this.has(params, param)) {
                unlockedTemplate = this.unlockTemplate(unlockedTemplate, param);
            }
        }

        return unlockedTemplate;
    }

    unlockTemplate(query, templateName) {
        const pattern = new RegExp(`/\\*${templateName}:(.+?)\\*/`, 'gm');
        return query.replace(pattern, '$1');
    }
}


module.exports = {DbAdapter};
