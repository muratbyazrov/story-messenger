const {System} = require('../../system');

class MessagesGate extends System {
    run(data) {
        switch (data.event) {
            case 'getMessages':
                return this.getMessages(data);
            case 'modifyMessages':
                return this.modifyMessages(data);
            case 'removeMessages':
                return this.removeMessages(data);
            default:
                return {};
        }
    }
}

module.exports = {MessagesGate};
