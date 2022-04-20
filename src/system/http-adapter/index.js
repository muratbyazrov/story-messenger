const express = require('express');
const bodyParser = require('body-parser');
const app = express();

class HttpAdapter {
    run(options, callback) {
        app.listen(options.port, () => {
            console.log(`SYSTEM >>>>>>>>>>: App listening on port ${options.port}`);
        });
        app.use(bodyParser.json());
        app.post(options.path, (req, res) => {
            try {
                res.send(callback(req.body));
            } catch (err) {
                res.send(err);
            }
        });
    }
}

module.exports = {
    HttpAdapter,
};
