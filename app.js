const {System} = require('./src/system');
const {MessagesGate} = require('./src/entities/messages/messages-gate.js');
const {ChatsGate} = require('./src/entities/chats/chats-gate.js');
const {UsersGate} = require('./src/entities/users/users-gate.js');
const config = require('./config.js');

class App {
    constructor() {
        System.init(config, [
            {EntityGate: MessagesGate, domain: 'messages'},
            {EntityGate: ChatsGate, domain: 'chats'},
            {EntityGate: UsersGate, domain: 'users'},
        ]);
    }

    init() {
        System.httpAdapter.run(request => System.gate.run(request));
        System.wsAdapter.run(request => System.gate.run(request));
    }
}

new App().init();
