const {schemaItems: {string, limit}} = require('../../system/validator/index.js');

const getChatsSchema = {
    id: 'getChatsSchema',
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

const createChatsSchema = {
    id: 'createChatsSchema',
    type: 'object',
    properties: {
        event: string,
        domain: string,
        params: {
            type: 'object',
            properties: {
                firstUserId: string,
                secondUserId: string,
            },
            required: ['firstUserId', 'secondUserId'],
        },
    },
};

const modifyChatsSchema = {
    id: 'modifyChatsSchema',
    type: 'object',
    properties: {
        event: string,
        domain: string,
    },
};

const removeChatsSchema = {
    id: 'removeChatsSchema',
    type: 'object',
    properties: {
        event: string,
        domain: string,
    },
};

module.exports = {
    getChatsSchema,
    createChatsSchema,
    modifyChatsSchema,
    removeChatsSchema,
};
