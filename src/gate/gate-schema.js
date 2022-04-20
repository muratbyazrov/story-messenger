const {schemaItems: {string}} = require('../system/validator/index.js');

const gateSchema = {
    id: '/Gate',
    type: 'object',
    properties: {
        event: string,
        domain: string,
    },
    required: ['event', 'domain'],
};

module.exports = {
    gateSchema,
};
