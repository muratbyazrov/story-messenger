const {schemaItems: {params, string}} = require('../../system/validator/index.js');

const getMessagesSchema = {
    id: "/getMessagesSchema",
    type: "object",
    properties: {
        event: string,
        domain: string,
        params,
    },
}

const modifyMessagesSchema = {
    id: "/getMessagesSchema",
    type: "object",
    properties: {
        event: string,
        domain: string,
        params,
    },
}

const removeMessagesSchema = {
    id: "/getMessagesSchema",
    type: "object",
    properties: {
        event: string,
        domain: string,
        params,
    },
}

module.exports = {
    getMessagesSchema,
    modifyMessagesSchema,
    removeMessagesSchema,
}