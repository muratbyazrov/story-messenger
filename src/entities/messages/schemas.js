const {schemaItems: {string, limit}} = require('../../system/validator/index.js');

const getMessagesSchema = {
    id: 'getMessagesSchema',
    type: 'object',
    additionalItems: true,
    properties: {
        params: {
            type: 'object',
            properties: {
                limit,
                chatId: string,
            },
            required: ['limit'],
        },
    },
    required: ['params'],
};

const createMessageSchema = {
    id: 'createMessageSchema',
    type: 'object',
    additionalItems: true,
    properties: {
        params: {
            type: 'object',
            properties: {
                senderId: string,
                chatId: string,
                messageText: string,
            },
            required: ['senderId', 'chatId', 'messageText'],
        },
    },
    required: ['params'],
};

const modifyMessagesSchema = {
    id: 'modifyMessagesSchema',
    type: 'object',
    properties: {
        event: string,
        domain: string,
    },
};

const removeMessagesSchema = {
    id: 'removeMessagesSchema',
    type: 'object',
    properties: {
        event: string,
        domain: string,
    },
};

module.exports = {
    getMessagesSchema,
    createMessageSchema,
    modifyMessagesSchema,
    removeMessagesSchema,
};
