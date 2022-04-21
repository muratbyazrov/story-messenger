const {Logger} = require('../logger');

class Utils extends Logger {
    isJson(data) {
        let result = false;
        try {
            JSON.parse(data);
        } catch (err) {
            result = true;
        }
        return result;
    }

    isObject(data) {
        return typeof data === 'object' && !Array.isArray(data) && data !== null;
    }

    has(obj, keyName) {
        if (!obj) {
            return false;
        }
        return Object.prototype.hasOwnProperty.call(obj, keyName);
    }
}

module.exports = {Utils};
