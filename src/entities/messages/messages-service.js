const {System} = require('../../system');
const {createMessage, getMessages} = require('./queries.js');

class MessagesService extends System {
    getMessages(data) {
        return this.dbAdapter.execQuery({
            queryName: getMessages,
            params: data.params,
        });
    }

    createMessage(data) {
        return this.dbAdapter.execQuery({
            queryName: createMessage,
            params: data.params,
        });
    }

    modifyMessages(data) {
        return this.dbAdapter.execQuery({
            queryName: modifyMessages,
            params: data.params,
        });
    }

    removeMessages(data) {
        return this.dbAdapter.execQuery({
            queryName: removeMessages,
            params: data.params,
        });
    }
}

module.exports = {
    MessagesService,
};
