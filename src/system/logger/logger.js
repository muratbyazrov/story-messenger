const {Validator} = require('../validator');

class Logger extends Validator {
    log(data) {
        console.error(`(${new Date().toLocaleString()}) LOGGER [INFO] `, data);
    }

    error(error) {
        console.error(`(${new Date().toLocaleString()}) LOGGER [ERROR] `, error);
    }
}

module.exports = {
    Logger,
};
