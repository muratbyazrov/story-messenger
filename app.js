const WebSocket = require('ws');
const wsServer = new WebSocket.Server({port: 9000});
const {mainController} = require('./src/main-controller');
const {System} = require("./src/system");

class App extends System {
    run() {
        wsServer.on('connection', (wsClient) => {
            this.logger.log(`ws client is connected`);

            wsClient.on('message', (message) => {
                try {
                    mainController.run(message);
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