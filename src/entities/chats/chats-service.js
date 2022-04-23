const {System} = require('../../system');
const {createChat, getChats} = require('./queries.js');

class ChatsService extends System {
    getChats(data) {
        return this.dbAdapter.execQuery({
            queryName: getChats,
            params: data.params,
        });
    }

    createChat(data) {
        return this.dbAdapter.execQuery({
            queryName: createChat,
            params: data.params,
        });
    }

    modifyChats(data) {
        return this.dbAdapter.execQuery({
            queryName: modifyChats,
            params: data.params,
        });
    }

    removeChats(data) {
        return this.dbAdapter.execQuery({
            queryName: removeChats,
            params: data.params,
        });
    }
}

module.exports = {
    ChatsService,
};
