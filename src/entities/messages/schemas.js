const {schemaItems: {string, limit}} = require('../../system/validator/index.js');

const getMessagesSchema = {
    id: '/getMessagesSchema',
    type: 'object',
    additionalItems: true,
    properties: {
        params: {
            type: 'object',
            properties: {limit},
            required: ['limit'],
        },
    },
    required: ['params'],
};

const modifyMessagesSchema = {
    id: '/getMessagesSchema',
    type: 'object',
    properties: {
        event: string,
        domain: string,
    },
};

const removeMessagesSchema = {
    id: '/getMessagesSchema',
    type: 'object',
    properties: {
        event: string,
        domain: string,
    },
};

module.exports = {
    getMessagesSchema,
    modifyMessagesSchema,
    removeMessagesSchema,
};
