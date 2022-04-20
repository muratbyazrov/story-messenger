const WebSocket = require('ws');

class WsAdapter {
    run(options, callback) {
        this.wsServer = new WebSocket.Server({port: options.port});
        try {
            this.wsServer.on('connection', wsClient => {
                // 1. connect
                console.log('SYSTEM [INFO] WS client is connected');

                // 2. callback
                try {
                    wsClient.on('message', message => callback(message));
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
