import {System} from "../system";
import {getMessagesSchema, modifyMessagesSchema, removeMessagesSchema} from "./schemas.js";
import {messagesService} from "./index";

class MessagesController extends System {
    getMessages(data) {
        this.logger.log(`MessagesController.getMessages: ${data}`);
        this.validator.validate(data, getMessagesSchema);

        return messagesService.getMessages(data);
    }

    modifyMessages(data) {
        this.logger.log(`MessagesController.modifyMessages: ${data}`);
        this.validator.validate(data, modifyMessagesSchema);

        return messagesService.modifyMessages(data);
    }

    removeMessages(data) {
        this.logger.log(`MessagesController.modifyMessages: ${data}`);
        this.validator.validate(data, removeMessagesSchema);

        return messagesService.removeMessages(data);
    }
}

module.exports = {
    MessagesController
}