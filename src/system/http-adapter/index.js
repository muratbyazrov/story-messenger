const express = require('express');
const app = express();

class HttpAdapter {
    run(options, callback) {
        app.listen(options.port, () => {
            console.log(`SYSTEM >>>>>>>>>>: App listening on port ${options.port}`)
        });

        app.post(options.path, (req, res) => {
            res.send(callback(req));
        });
    }
}

module.exports = {
    HttpAdapter,
}