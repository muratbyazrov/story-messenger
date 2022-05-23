const {gateSchema} = require('./gate-schema.js');
const {Utils} = require('../utils');

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
            const data = this.isJson(request) ? request : JSON.parse(request);
            this.validate(data, gateSchema);
            return this.getSystemResponse(request, await this.gates[data.domain].run(data));
        } catch (err) {
            const error = this.getSystemResponse(request, err);
            this.log(error);
            return error;
        }
    }

    getSystemResponse({domain, event}, data) {
        const {isError, ..._data} = data;
        return isError ? {status: 'error', domain, event, error: _data} : {status: 'ok', domain, event, data};
    }
}

module.exports = {Gate};
