const {AccountsController} = require('./accounts-controller.js');

class AccountsGate {
    constructor() {
        this.accountsController = new AccountsController();
    }

    run(data) {
        return this.accountsController[data.event](data);
    }
}

module.exports = {AccountsGate};
