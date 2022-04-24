const {System} = require('./src/system');
const {MessagesGate} = require('./src/entities/messages/messages-gate.js');
const {ChatsGate} = require('./src/entities/chats/chats-gate.js');

class App extends System {
    constructor(options) {
        super(options);
        this.gate = new this.Gate([
            {EntityGate: MessagesGate, domain: 'messages'},
            {EntityGate: ChatsGate, domain: 'chats'},
        ]);
    }

    run() {
        this.httpAdapter.run(request => this.gate.run(request));
        this.wsAdapter.run(request => this.gate.run(request));
    }
}

const app = new App();
app.run();
