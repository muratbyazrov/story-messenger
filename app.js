const WebSocket = require('ws');
const wsServer = new WebSocket.Server({port: 9000});
const {mainController} = require('./src/main-controller');
const {System} = require("./src/system");

class App extends System {
    run() {
        wsServer.on('connection', (wsClient) => {
            console.log(`ws client is connected`)

            wsClient.on('message', (message) => {
                try {
                    mainController.run(message);
                } catch (error) {
                    wsClient.send(this.logger.log(error.message));
                }
            });

            wsClient.on('close', (message) => {
                console.log('ws client is disconnected')
            })
        });
    }
}

const app = new App();
app.run();

