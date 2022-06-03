const {System} = require('story-system');
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

    createMessage(data) {
        System.validator.validate(data, createMessageSchema);
        return this.messagesService.createMessage(data);
    }
}

module.exports = {
    MessagesController,
};
