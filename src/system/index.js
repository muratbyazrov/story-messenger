const {Validator} = require('./validator');
const {Logger} = require('./logger');
const {DbAdapter} = require('./db-adapter');
const {HttpAdapter} = require('./http-adapter');
const {WsAdapter} = require('./ws-adapter');
const {Utils} = require('./utils');
const {Gate} = require('./gate');
const systemConfig = require('./system-config.js');

class System {
    constructor() {
        this.logger = new Logger();
        this.validator = new Validator();
        this.dbAdapter = new DbAdapter(systemConfig);
        this.httpAdapter = new HttpAdapter(systemConfig);
        this.wsAdapter = new WsAdapter(systemConfig);
        this.utils = new Utils();
        this.Gate = Gate;
    }
}

module.exports = {
    System,
};
