const {System} = require('../../system');
const {getMessagesSchema, createMessageSchema} = require('./schemas.js');
const {MessagesService} = require('./messages-service');

class MessagesController {
    constructor() {
        this.messagesService = new MessagesService();
    }

    getMessages(data) {
        System.validator.validate(data, getMessagesSchema);
        return this.messagesService.getMessages(data);
    }

    async createMessage(data) {
        System.validator.validate(data, createMessageSchema);
        const message = await this.messagesService.createMessage(data);
        const {chatId} = message;
        return this.getMessages(chatId);
    }
}

module.exports = {
    MessagesController,
};
