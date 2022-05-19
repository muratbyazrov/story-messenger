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
            return this.getSystemResponse(await this.gates[data.domain].run(data));
        } catch (err) {
            const error = this.getSystemResponse(err);
            this.log(error);
            return error;
        }
    }

    getSystemResponse(data) {
        const {positive = true, ..._data} = data;
        if (!positive) {
            return {error: _data};
        }
        return {data: [..._data.res]};
    }
}

module.exports = {Gate};
