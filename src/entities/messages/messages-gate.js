const {MessagesController} = require('./messages-controller.js');

class MessagesGate {
    constructor() {
        this.messagesController = new MessagesController();
    }

    run(data) {
        switch (data.event) {
            case 'getMessages':
                return this.messagesController.getMessages(data);
            case 'createMessage':
                return this.messagesController.createMessage(data);
            default:
                return {};
        }
    }
}

module.exports = {MessagesGate};
