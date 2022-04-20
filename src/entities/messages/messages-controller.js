const {System} = require('../../system');
const {getMessagesSchema, modifyMessagesSchema, removeMessagesSchema} = require('./schemas.js');
const {MessagesService} = require('./messages-service');

class MessagesController extends System {
    constructor(options) {
        super(options);
        this.messagesService = new MessagesService();
    }

    getMessages(data) {
        this.validator.validate(data, getMessagesSchema);

        return this.messagesService.getMessages(data);
    }

    modifyMessages(data) {
        this.validator.validate(data, modifyMessagesSchema);

        return this.messagesService.modifyMessages(data);
    }

    removeMessages(data) {
        this.validator.validate(data, removeMessagesSchema);

        return this.messagesService.removeMessages(data);
    }
}

module.exports = {
    MessagesController,
};
