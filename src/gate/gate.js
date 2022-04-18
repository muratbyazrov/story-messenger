const {gateSchema} = require("./gate-schema");
const {System} = require("../system");
const {MessagesGate} = require("../entities/messages");

class Gate extends System {
    constructor(options) {
        super(options);
        this.messagesGate = new MessagesGate();
    }

    run(data) {
        try {
            this.logger.log(`Gate. Get Message`, data);
            this.validator.validate(data, gateSchema);

            switch(data.domain) {
                case 'messages':
                    return this.messagesGate.run(data);
                case 'chats':
                    return {}
                default:
                    return {}
            }
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Gate;