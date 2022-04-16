import {System} from "../system";
import {mainControllerSchema} from "../main-controller/main-controller-schema";
import {getMessagesSchema, modifyMessagesSchema, removeMessagesSchema} from "./schemas";

class MessagesController extends System {
    getMessages(data) {
        this.logger.log(`MessagesController.getMessages: ${data}`);
        this.validator.validate(data, getMessagesSchema);
    }

    modifyMessages(data) {
        this.logger.log(`MessagesController.modifyMessages: ${data}`);
        this.validator.validate(data, modifyMessagesSchema);
    }

    removeMessages(data) {
        this.logger.log(`MessagesController.modifyMessages: ${data}`);
        this.validator.validate(data, removeMessagesSchema);
    }
}