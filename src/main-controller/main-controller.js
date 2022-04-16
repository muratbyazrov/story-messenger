const {mainControllerSchema} = require("./main-controller-schema");
const {System} = require("../system");

class MainController extends System {
    run(message) {
        try {
            this.logger.log(`MainController. Get Message: ${message}`)
            this.validator.validate(message, mainControllerSchema);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = MainController;