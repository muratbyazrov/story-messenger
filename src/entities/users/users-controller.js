const {System} = require('../../system');
const {getUsersSchema, createUserSchema} = require('./schemas.js');
const {UsersService} = require('./users-service');

class UsersController {
    constructor() {
        this.usersService = new UsersService();
    }

    getUsers(data) {
        System.validator.validate(data, getUsersSchema);
        return this.usersService.getUsers(data);
    }

    createUser(data) {
        System.validator.validate(data, createUserSchema);
        return this.usersService.createUser(data);
    }
}

module.exports = {UsersController};
