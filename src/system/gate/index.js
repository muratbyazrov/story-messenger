const {gateSchema} = require('./gate-schema.js');
const {Utils} = require('../utils');

class Gate extends Utils {
    constructor(gates) {
        super();
        this.handlers = {};
        for (const {EntityGate, domain} of gates) {
            this.handlers[domain] = new EntityGate();
        }
    }

    async run(request) {
        try {
            const data = this.isJson(request) ? request : JSON.parse(request);
            this.log(data);
            this.validate(data, gateSchema);
            return this.getSystemResponse(await this.handlers[data.domain].run(data));
        } catch (error) {
            this.log(error);
            return error;
        }
    }

    getSystemResponse(data) {
        const {positive = true, ..._data} = data;
        if (!positive) {
            return {error: _data};
        }
        return {data: _data};
    }
}

module.exports = {Gate};
