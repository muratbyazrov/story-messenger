const {System} = require('story-system');
const config = require('./config.js');
const {MessagesGate} = require('./src/entities/messages/messages-gate.js');
const {ChatsGate} = require('./src/entities/chats/chats-gate.js');
const {AccountsGate} = require('./src/entities/accounts/accounts-gate.js');

class App {
    constructor() {
        System.init(config);
        System.gateInit([
            {EntityGate: MessagesGate, domain: 'messages'},
            {EntityGate: ChatsGate, domain: 'chats'},
            {EntityGate: AccountsGate, domain: 'accounts'},
        ]);
        System.httpAdapter.run(request => System.gate.run(request));
        System.wsAdapter.run(request => System.gate.run(request));
    }
}

// eslint-disable-next-line no-new
new App();
