const {System: {validator: {schemaItems: {string, limit}}}} = require('story-system');

const getChatsSchema = {
    id: 'getChatsSchema',
    type: 'object',
    additionalItems: true,
    properties: {
        params: {
            type: 'object',
            properties: {
                limit,
                accountId: string,
            },
            required: ['limit', 'accountId'],
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
