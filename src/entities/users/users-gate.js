const {UsersController} = require('./users-controller.js');

class UsersGate {
    constructor() {
        this.usersController = new UsersController();
    }

    run(data) {
        switch (data.event) {
            case 'getUsers':
                return this.usersController.getUsers(data);
            case 'createUser':
                return this.usersController.createUser(data);
            default:
                return {};
        }
    }
}

module.exports = {UsersGate};
