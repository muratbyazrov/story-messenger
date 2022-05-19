const {System} = require('../../system');
const {createMessage, getMessages} = require('./queries.js');
const {getChats} = require('../chats/queries.js');

class MessagesService {
    async getMessages(data) {
        const messages = await System.dbAdapter.execQuery({
            queryName: getMessages,
            params: data.params,
        });
        console.log(messages);
        return messages;
    }

    async createMessage(data) {
        const message = await System.dbAdapter.execQuery({
            queryName: createMessage,
            params: data.params,
        });

        const chat = await System.dbAdapter.execQuery({
            queryName: getChats,
            params: {
                chatId: data.chatId,
            },
        });

        const messages = await this.getMessages({
            limit: 100,
            isRead: false,
            chatId: data.chatId,
        });

        console.log({messages, chat});

        System.wsAdapter.send(message.data[0].wsSessionId, {});
    }
}

module.exports = {
    MessagesService,
};
