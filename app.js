const {System} = require('./src/system');
const {MessagesGate} = require('./src/entities/messages/messages-gate.js');
const {ChatsGate} = require('./src/entities/chats/chats-gate.js');
const {UsersGate} = require('./src/entities/users/users-gate.js');

class App {
    constructor() {
        this.gate = new System.Gate([
            {EntityGate: MessagesGate, domain: 'messages'},
            {EntityGate: ChatsGate, domain: 'chats'},
            {EntityGate: UsersGate, domain: 'users'},
        ]);
    }

    run() {
        System.httpAdapter.run(request => this.gate.run(request));
        System.wsAdapter.run(request => this.gate.run(request));
    }
}

const app = new App();
app.run();
