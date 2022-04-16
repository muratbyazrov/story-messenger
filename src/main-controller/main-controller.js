const {mainControllerSchema} = require("./main-controller-schema");
const {System} = require("../system");

class MainController extends System {
    run(data) {
        try {
            this.logger.log(`MainController. Get Message: ${data}`);
            this.validator.validate(data, mainControllerSchema);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = MainController;