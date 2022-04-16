import {System} from "../../system";
const {createMessage, getMessages} = require('./queries.js');

class MessagesService extends System {
    getMessages(data) {
        return this.dbAdapter.execQuery();
    }

    modifyMessages(data) {
        return this.dbAdapter.execQuery(createMessage);
    }

    removeMessages(data) {
        this.dbAdapter.execQuery(getMessages)
    }
}

module.exports = {
    MessagesService
}