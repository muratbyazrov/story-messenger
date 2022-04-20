class DbError {
    constructor(message) {
        this.positive = false;
        this.code = 300;
        this.name = 'Data Base Error';
        this.message = message;
    }
}

module.exports = {DbError};
