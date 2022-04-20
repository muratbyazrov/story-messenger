const {gateSchema} = require('./gate-schema');
const {System} = require('../system');
const {MessagesGate} = require('../entities/messages');

class Gate extends System {
    constructor(options) {
        super(options);
        this.messagesGate = new MessagesGate();
    }

    run(request) {
        try {
            const data = this.utils.isJson(request) ? request : JSON.parse(request);
            this.logger.log(data);
            this.validator.validate(data, gateSchema);
            switch (data.domain) {
                case 'messages':
                    return this.messagesGate.run(data);
                case 'chats':
                    return {};
                default:
                    return {};
            }
        } catch (error) {
            this.logger.log(error);
            return this.systemResponse.response(error);
        }
    }
}

module.exports = Gate;
