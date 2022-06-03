const {UsersController} = require('./users-controller.js');

class UsersGate {
    constructor() {
        this.usersController = new UsersController();
    }

    run(data) {
        return this.usersController[data.event](data);
    }
}

module.exports = {UsersGate};
