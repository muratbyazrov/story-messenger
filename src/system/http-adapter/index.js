const express = require('express');
const app = express();

class HttpAdapter {
    run(port){
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        })

        return app;
    }
}

module.exports = {
    HttpAdapter,
}