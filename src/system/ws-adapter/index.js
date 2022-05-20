const WebSocket = require('ws');
const {v4} = require('uuid');

class WsAdapter {
    constructor(options) {
        this.config = options.ws;
        this.wsClients = new Map();
    }

    run(callback) {
        this.wsServer = new WebSocket.Server({port: this.config.port});
        try {
            this.wsServer.on('connection', wsClient => {
                // 1. connect
                const sessionId = v4();
                wsClient.send(JSON.stringify({sessionId}));
                this.wsClients.set(sessionId, wsClient);


                // 2. callback
                try {
                    wsClient.on('message', async message => {
                        wsClient.send(JSON.stringify(await callback(JSON.parse(message.toString()))));
                    });
                } catch (error) {
                    wsClient.send(`${new Date().toLocaleString()} | ${error.message}`);
                }

                // 3. disconnect
                wsClient.on('close', () => {
                    this.wsClients.delete(wsClient);
                    console.log('SYSTEM [INFO] WS client is disconnected');
                });
            });
        } catch (error) {
            console.log(`SYSTEM [ERROR]: ${error.message}`);
        }
    }

    async send(sessionId = null, message = {}) {
        const wsClient = this.wsClients.get(sessionId);
        await wsClient.send(JSON.stringify(message));
    }
}

module.exports = {
    WsAdapter,
};
