const {System} = require('./src/system');
const {MessagesGate} = require('./src/entities/messages/messages-gate.js');

class App extends System {
    constructor() {
        super();
        this.gate = new this.Gate([
            {EntityGate: MessagesGate, domain: 'messages'},
        ]);
    }

    run() {
        this.httpAdapter.run(
            {
                port: 3000,
                path: '/story-messenger-api/v1',
            },
            request => this.gate.run(request),
        );

        this.wsAdapter.run(
            {
                port: 9000,
            },
            request => this.gate.run(request),
        );
    }
}

const app = new App();
app.run();
