const {System} = require("../../system");
const {getMessagesSchema, modifyMessagesSchema, removeMessagesSchema} = require("./schemas.js");
const {MessagesService} = require("./index");

class MessagesController extends System {
    constructor(options) {
        super(options);

        this.messagesService = new MessagesService();
    }

    run(data){
        switch(data.event) {
            case 'getMessages':
                return this.getMessages(data);
            case 'modifyMessages':
                return this.modifyMessages(data);
            case 'removeMessages':
                return this.removeMessages(data);
            default:
                return {}
        }
    }

    getMessages(data) {
        this.logger.log(`MessagesController.getMessages: ${data}`);
        this.validator.validate(data, getMessagesSchema);

        return this.messagesService.getMessages(data);
    }

    modifyMessages(data) {
        this.logger.log(`MessagesController.modifyMessages: ${data}`);
        this.validator.validate(data, modifyMessagesSchema);

        return this.messagesService.modifyMessages(data);
    }

    removeMessages(data) {
        this.logger.log(`MessagesController.modifyMessages: ${data}`);
        this.validator.validate(data, removeMessagesSchema);

        return this.messagesService.removeMessages(data);
    }
}

module.exports = {
    MessagesController
}