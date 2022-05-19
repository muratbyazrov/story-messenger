const {System} = require('../../system');
const {getUsers, createUser} = require('./queries.js');

class UsersService {
    getUsers(data) {
        return System.dbAdapter.execQuery({
            queryName: getUsers,
            params: data.params,
        });
    }

    createUser(data) {
        return System.dbAdapter.execQuery({
            queryName: createUser,
            params: data.params,
        });
    }
}

module.exports = {UsersService};
