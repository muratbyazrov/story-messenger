class Logger {
    log(data) {
        console.log(new Date().toLocaleString(), data);
    }
}

module.exports = {
    Logger,
}