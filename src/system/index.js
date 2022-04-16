const {Validator} = require("./validator");
const {Logger} = require('./logger');

class System {
    constructor() {
        this.logger = new Logger();
        this.validator = new Validator();
    }
}

module.exports = {
    System,
}