const {Validator} = require("./validator");
const {Logger} = require('./logger');
const {DbAdapter} = require("./db-adapter");

class System {
    constructor() {
        this.logger = new Logger();
        this.validator = new Validator();
        this.dbAdapter = new DbAdapter();
    }
}

module.exports = {
    System,
}