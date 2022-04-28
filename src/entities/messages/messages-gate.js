const {System} = require('../../system');
const {MessagesController} = require('./messages-controller.js');

class MessagesGate extends System {
    constructor(options) {
        super(options);
        this.messagesController = new MessagesController();
    }

    run(data) {
        switch (data.event) {
            case 'getMessages':
                return this.messagesController.getMessages(data);
            case 'createMessage':
                return this.messagesController.createMessage(data);
            case 'modifyMessages':
                return this.messagesController.modifyMessages(data);
            case 'removeMessages':
                return this.messagesController.removeMessages(data);
            default:
                return {};
        }
    }
}

module.exports = {MessagesGate};
