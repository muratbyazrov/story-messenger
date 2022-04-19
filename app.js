const {Gate} = require('./src/gate');
const {System} = require("./src/system");

class App extends System {
    constructor(options) {
        super(options);
        this.gate = new Gate();
    }

    run() {
        this.httpAdapter.run(
            {
                port: 3000,
                path: '/story-messenger-api/v1'
            },
            (request) => this.gate.run(request),
        );

        this.wsAdapter.run(
            {
                port: 9000
            },
            (request) => this.gate.run(request),
        );
    }
}

const app = new App();
app.run();
