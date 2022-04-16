const mainControllerSchema = {
    id: "/MainController",
    type: "object",
    properties: {
        event: {"type": "string"},
    },
    required: ["event"]
}

module.exports = {
    mainControllerSchema
}