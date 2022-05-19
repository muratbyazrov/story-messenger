const WebSocket = require('ws');

class WsAdapter {
    constructor(options) {
        this.config = options.ws;
    }

    run(callback) {
        this.wsServer = new WebSocket.Server({port: this.config.port});
        try {
            this.wsServer.on('connection', wsClient => {
                console.log(wsClient);
                // 1. connect
                console.log('SYSTEM [INFO] WS client is connected');
                wsClient.send('Connected to story-messenger ws-server');

                // 2. callback
                try {
                    wsClient.on('message', async message => {
                        wsClient.send(JSON.stringify(await callback(message)));
                    });
                } catch (error) {
                    wsClient.send(`${new Date().toLocaleString()} | ${error.message}`);
                }

                // 3. disconnect
                wsClient.on('close', () => {
                    console.log('SYSTEM [INFO] WS client is disconnected');
                });
            });
        } catch (error) {
            console.log(`SYSTEM [ERROR]: ${error.message}`);
        }
    }
}

module.exports = {
    WsAdapter,
};
