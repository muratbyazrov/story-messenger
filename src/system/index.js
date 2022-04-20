const {Validator} = require('./validator');
const {Logger} = require('./logger');
const {DbAdapter} = require('./db-adapter');
const {HttpAdapter} = require('./http-adapter');
const {WsAdapter} = require('./ws-adapter');
const {Utils} = require('./utils');
const {SystemResponse} = require('./system-response');

class System {
    constructor() {
        this.logger = new Logger();
        this.validator = new Validator();
        this.dbAdapter = new DbAdapter();
        this.httpAdapter = new HttpAdapter();
        this.wsAdapter = new WsAdapter();
        this.utils = new Utils();
        this.systemResponse = new SystemResponse();
    }
}

module.exports = {
    System,
};
