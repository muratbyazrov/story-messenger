const {schemaItems: {string, limit}} = require('../../system/validator/index.js');

const getChatsSchema = {
    id: 'getChatsSchema',
    type: 'object',
    additionalItems: true,
    properties: {
        params: {
            type: 'object',
            properties: {
                limit,
                senderId: string,
                recipientId: string,
            },
            required: ['limit', 'senderId', 'recipientId'],
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
                senderId: string,
                recipientId: string,
            },
            required: ['senderId', 'recipientId'],
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
