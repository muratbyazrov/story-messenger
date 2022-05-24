const {Validator} = require('./validator');
const {Logger} = require('./logger');
const {DbAdapter} = require('./db-adapter');
const {HttpAdapter} = require('./http-adapter');
const {WsAdapter} = require('./ws-adapter');
const {Utils} = require('./utils');
const {Gate} = require('./gate');
const config = require('../../config.js');

class System {
    constructor() {
        this.logger = new Logger();
        this.utils = new Utils();
        this.validator = new Validator();
        this.dbAdapter = new DbAdapter(config);
        this.httpAdapter = new HttpAdapter(config);
        this.wsAdapter = new WsAdapter(config);
        this.Gate = Gate;
    }
}

module.exports = {
    System: new System(),
};
