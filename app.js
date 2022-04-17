const WebSocket = require('ws');
const wsServer = new WebSocket.Server({port: 9000});
const {MainController} = require('./src/main-controller');
const {System} = require("./src/system");

class App extends System {
    constructor(options) {
        super(options);
        this.mainController = new MainController();
    }

    run() {
        this.httpAdapter.run(3000).post('/story-messenger-api/v1', (req, res) => {
            const result = this.mainController.run(req);

            res.send(result);
        });

        wsServer.on('connection', (wsClient) => {
            this.logger.log(`ws client is connected`);

            wsClient.on('message', (message) => {
                try {
                    this.mainController.run(message);
                } catch (error) {
                    this.logger.log(error.message);
                    wsClient.send(this.logger.formatData(error.message));
                }
            });

            wsClient.on('close', () => {
                this.logger.log('ws client is disconnected');
            })
        });
    }
}

const app = new App();
app.run();