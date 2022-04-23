const {System} = require('../../system');
const {getChatsSchema, createChatsSchema, modifyChatsSchema, removeChatsSchema} = require('./schemas.js');
const {ChatsService} = require('./chats-service.js');

class ChatsController extends System {
    constructor(options) {
        super(options);
        this.chatsService = new ChatsService();
    }

    getChats(data) {
        this.validator.validate(data, getChatsSchema);
        return this.chatsService.getChats(data);
    }

    createChat(data) {
        this.validator.validate(data, createChatsSchema);
        return this.chatsService.createChat(data);
    }

    modifyChats(data) {
        this.validator.validate(data, modifyChatsSchema);
        return this.chatsService.modifyChats(data);
    }

    removeChats(data) {
        this.validator.validate(data, removeChatsSchema);
        return this.chatsService.removeChats(data);
    }
}

module.exports = {
    ChatsController,
};
