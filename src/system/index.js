const {Validator} = require("./validator");
const {Logger} = require('./logger');
const {postgresClient} = require("./db-adapter");

class System {
    constructor() {
        this.logger = new Logger();
        this.validator = new Validator();
        this.pg = postgresClient;
    }
}

module.exports = {
    System,
}