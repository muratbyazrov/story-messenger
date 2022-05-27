const {gateSchema} = require('./gate-schema.js');
const {Utils} = require('../utils');
const {ValidationError} = require('../system-errors/validation-error');

class Gate extends Utils {
    constructor(gates) {
        super();
        this.gates = {};
        for (const {EntityGate, domain} of gates) {
            this.gates[domain] = new EntityGate();
        }
    }

    async run(request) {
        try {
            let data;
            if (this.isObject(request)) {
                data = request;
            } else if (this.isJson(request)) {
                data = JSON.parse(request);
            } else {
                throw new ValidationError('Request error. Maybe request is not JSON');
            }

            console.info(`SYSTEM [INFO]: Got request:`, data);
            this.validate(data, gateSchema);
            const result = this.getSystemResponse(request, await this.gates[data.domain].run(data));
            console.info(`SYSTEM [INFO]: Send result:`, result);
            return result;
        } catch (err) {
            const error = this.getSystemResponse(request, err);
            this.log(error);
            return error;
        }
    }

    getSystemResponse({domain = 'error', event = 'error'}, data) {
        const {isError, ..._data} = data;
        return isError ? {status: 'error', domain, event, error: _data} : {status: 'ok', domain, event, data};
    }
}

module.exports = {Gate};
