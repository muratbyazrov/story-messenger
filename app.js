const {System} = require('story-system');
const config = require('./config.js');
const {MessagesController} = require('./src/entities/messages/messages-controller.js');
const {ChatsController} = require('./src/entities/chats/chats-controller.js');
const {AccountsController} = require('./src/entities/accounts/accounts-controller.js');

class App {
    constructor() {
        System.init(config);
        System.gateInit([
            {EntityController: MessagesController, domain: 'messages'},
            {EntityController: ChatsController, domain: 'chats'},
            {EntityController: AccountsController, domain: 'accounts'},
        ]);
        System.httpAdapter.run(request => System.gate.run(request));
        System.wsAdapter.run(request => System.gate.run(request));
    }
}

// eslint-disable-next-line no-new
new App();
