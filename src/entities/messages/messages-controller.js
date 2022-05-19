const {System} = require('../../system');
const {getMessagesSchema, modifyMessagesSchema, removeMessagesSchema, createMessageSchema} = require('./schemas.js');
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

    async createMessage(data) {
        this.validator.validate(data, createMessageSchema);
        const message = await this.messagesService.createMessage(data);
        const {chatId} = message;
        return this.getMessages(chatId);
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
