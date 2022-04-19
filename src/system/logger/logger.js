class Logger {
    log(data) {
        console.error(`(${new Date().toLocaleString()}) LOGGER >>>>>>>>>>: `, data);
    }

    error(error){
        console.error(`(${new Date().toLocaleString()}) SYSTEM ERROR >>>>>>>>>>: `, error);
    }
}

module.exports = {
    Logger,
}