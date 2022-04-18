const {System} = require("../../system");
const {createMessage, getMessages} = require('./queries.js');

class MessagesService extends System {
    constructor() {
        super();
    }

    getMessages(data) {
        return this.dbAdapter.execQuery({
            queryName: getMessages, values: [...data.params]
        });
    }

    createMessage(data) {
        return this.dbAdapter.execQuery({
            queryName: createMessage, values: [...data.params]
        });
    }

    modifyMessages(data) {
        return this.dbAdapter.execQuery();
    }

    removeMessages(data) {
        this.dbAdapter.execQuery()
    }
}

module.exports = {
    MessagesService
}