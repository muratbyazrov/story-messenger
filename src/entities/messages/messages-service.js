const {System} = require('story-system');
const {createMessage, getMessages} = require('./queries.js');

class MessagesService {
    getMessages(data) {
        return System.dbAdapter.execQuery({
            queryName: getMessages,
            params: data.params,
        });
    }

    async createMessage(data) {
        const res = await System.dbAdapter.execQuery({
            queryName: createMessage,
            isArrayResult: false,
            params: data.params,
        });

        const message = await System.dbAdapter.execQuery({
            queryName: getMessages,
            isArrayResult: false,
            params: {
                limit: 1,
                messageId: res.messageId,
            },
        });

        await System.wsAdapter.send(
            message.wsSessionId,
            System.systemResponse.form({domain: 'messages', event: 'messageCreated'}, message),
        );

        return res;
    }
}

module.exports = {
    MessagesService,
};
