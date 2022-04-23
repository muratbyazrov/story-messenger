const {System} = require('../../system');
const {ChatsController} = require('./chats-controller.js');

class ChatsGate extends System {
    constructor(options) {
        super(options);
        this.chatsController = new ChatsController();
    }

    run(data) {
        switch (data.event) {
            case 'getChats':
                return this.chatsController.getChats(data);
            case 'createChat':
                return this.chatsController.createChat(data);
            case 'modifyChats':
                return this.chatsController.modifyChats(data);
            case 'removeChats':
                return this.chatsController.removeChats(data);
            default:
                return {};
        }
    }
}

module.exports = {ChatsGate};
