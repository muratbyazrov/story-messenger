const {schemaItems: {string}} = require('../system/validator/index.js')

const mainControllerSchema = {
    id: "/MainController",
    type: "object",
    properties: {
        event: string,
        domain: string,
    },
    required: ['event', 'domain']
}

module.exports = {
    mainControllerSchema
}