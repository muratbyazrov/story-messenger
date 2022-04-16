class Logger {
    formatData(data) {
        const date = new Date();
        return `${date.toLocaleString()} | ${data}`
    }

    log(data) {
        console.log(this.formatData(data));
    }
}

module.exports = {
    Logger,
}