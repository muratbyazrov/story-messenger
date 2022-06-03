const {MessagesController} = require('./messages-controller.js');

class MessagesGate {
    constructor() {
        this.messagesController = new MessagesController();
    }

    run(data) {
        return this.messagesController[data.event](data);
    }
}

module.exports = {MessagesGate};
