const {System: {validator: {schemaItems: {string, limit}}}} = require('story-system');

const getUsersSchema = {
    id: 'getUsersSchema',
    type: 'object',
    additionalItems: true,
    properties: {
        params: {
            type: 'object',
            properties: {
                limit,
                userId: string,
            },
            required: ['limit', 'userId'],
        },
    },
    required: ['params'],
};

const createUserSchema = {
    id: 'createUserSchema',
    type: 'object',
    additionalItems: true,
    properties: {
        params: {
            type: 'object',
            properties: {
                userId: string,
                wsSessionId: string,
            },
            required: ['userId', 'wsSessionId'],
        },
    },
    required: ['params'],
};

module.exports = {
    getUsersSchema,
    createUserSchema,
};
