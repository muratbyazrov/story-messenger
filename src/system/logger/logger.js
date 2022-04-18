class Logger {
    log(data) {
        console.log('LOGGER >>>>>>>>>>: ', new Date().toLocaleString(), data);
    }
}

module.exports = {
    Logger,
}