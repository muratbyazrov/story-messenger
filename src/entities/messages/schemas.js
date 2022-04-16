const getMessagesSchema = {
    id: "/getMessagesSchema",
    type: "object",
    properties: {
        event: {"type": "string"},
    },
}

const modifyMessagesSchema = {
    id: "/getMessagesSchema",
    type: "object",
    properties: {
        event: {"type": "string"},
    },
}

const removeMessagesSchema = {
    id: "/getMessagesSchema",
    type: "object",
    properties: {
        event: {"type": "string"},
    },
}

module.exports = {
    getMessagesSchema,
    modifyMessagesSchema,
    removeMessagesSchema,
}