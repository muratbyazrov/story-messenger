const {System} = require('../../system');
const {getChatsSchema, createChatsSchema} = require('./schemas.js');
const {ChatsService} = require('./chats-service.js');

class ChatsController {
    constructor() {
        this.chatsService = new ChatsService();
    }

    getChats(data) {
        System.validator.validate(data, getChatsSchema);
        return this.chatsService.getChats(data);
    }

    createChat(data) {
        System.validator.validate(data, createChatsSchema);
        return this.chatsService.createChat(data);
    }
}

module.exports = {
    ChatsController,
};
