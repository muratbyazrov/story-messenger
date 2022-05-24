const express = require('express');
const app = express();
const bodyParser = require('body-parser');

class HttpAdapter {
    constructor(options) {
        this.config = options.http;
    }

    run(callback) {
        app.listen(this.config.port, this.config.host, () => {
            console.info(`SYSTEM [INFO]: App listening on port ${this.config.port}`);
        });
        app.use(bodyParser.json());
        app.post(this.config.path, async (req, res) => {
            console.info(`SYSTEM [INFO]: Get http request`, req.body);
            try {
                res.send(await callback(req.body));
            } catch (err) {
                res.send(err);
            }
        });
    }
}

module.exports = {
    HttpAdapter,
};

/*
* настройка https на localhost
* https://www.section.io/engineering-education/how-to-get-ssl-https-for-localhost/
* */
