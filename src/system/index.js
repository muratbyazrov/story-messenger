const {Validator} = require("./validator");
const {Logger} = require('./logger');
const {DbAdapter} = require("./db-adapter");
const {HttpAdapter} = require("./http-adapter");
const {WsAdapter} = require("./ws-adapter");

class System {
    constructor() {
        this.logger = new Logger();
        this.validator = new Validator();
        this.dbAdapter = new DbAdapter();
        this.httpAdapter = new HttpAdapter();
        this.wsAdapter = new WsAdapter();
    }
}

module.exports = {
    System,
}