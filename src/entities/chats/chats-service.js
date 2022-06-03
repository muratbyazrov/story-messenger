const {System} = require('story-system');
const {createChat, getChats} = require('./queries.js');

class ChatsService {
    getChats(data) {
        return System.dbAdapter.execQuery({
            queryName: getChats,
            params: data.params,
        });
    }

    createChat(data) {
        return System.dbAdapter.execQuery({
            queryName: createChat,
            params: data.params,
        });
    }
}

module.exports = {
    ChatsService,
};
