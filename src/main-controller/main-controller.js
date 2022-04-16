const {validator} = require("../system/validator");
const {mainControllerSchema} = require("./main-controller-schema");
const {System} = require("../system");

class MainController extends System {
    run(message) {
        try {
            console.log(`get message ${message}`);
            this.validator.validate(message, mainControllerSchema);
        } catch (error) {
            throw error
        }
    }
}

module.exports = MainController;