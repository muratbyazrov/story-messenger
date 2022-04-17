const {mainControllerSchema} = require("./main-controller-schema");
const {System} = require("../system");
const {MessagesController} = require("../entities/messages/messages-controller");

class MainController extends System {
    constructor(options) {
        super(options);
        this.messagesController = new MessagesController();
    }

    run(data) {
        try {
            this.logger.log(`MainController. Get Message: ${data}`);
            this.validator.validate(data, mainControllerSchema);

            switch(data.domain) {
                case 'messages':
                    return this.messagesController.run(data);
                case 'chats':
                    return {}
                default:
                    return {}
            }
        } catch (error) {
            throw error;
        }
    }
}

module.exports = MainController;