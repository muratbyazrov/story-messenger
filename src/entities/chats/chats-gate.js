const {ChatsController} = require('./chats-controller.js');

class ChatsGate {
    constructor() {
        this.chatsController = new ChatsController();
    }

    run(data) {
        switch (data.event) {
            case 'getChats':
                return this.chatsController.getChats(data);
            case 'createChat':
                return this.chatsController.createChat(data);
            default:
                return {};
        }
    }
}

module.exports = {ChatsGate};
