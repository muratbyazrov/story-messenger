class Logger {
    log(data) {
        const date = new Date();
        return `${date.toLocaleString()}: ${data}`
    }
}

module.exports = {
    Logger
}