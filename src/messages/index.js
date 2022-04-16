const {MessageController} = require('./messages-controller.js');
const {MessageService} = require('./messages-service.js');
const messagesService = new MessageService();
const messagesController = new MessageController()

module.exports = {
    messagesController,
    messagesService,
}