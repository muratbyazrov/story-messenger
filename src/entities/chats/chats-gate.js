const {ChatsController} = require('./chats-controller.js');

class ChatsGate {
    constructor() {
        this.chatsController = new ChatsController();
    }

    run(data) {
        return this.chatsController[data.event](data);
    }
}

module.exports = {ChatsGate};
