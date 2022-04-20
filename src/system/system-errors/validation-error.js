class ValidationError {
    constructor(message) {
        this.positive = false;
        this.code = 404;
        this.name = 'Validation Error';
        this.message = message;
    }
}

module.exports = {ValidationError};
