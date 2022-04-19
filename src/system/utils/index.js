class Utils {
    isJson(data) {
        let result = false;
        try {
            JSON.parse(data)
        } catch (e) {
            result = true
        }
        return result;
    }

    isObject(data) {
        return typeof data === 'object' && !Array.isArray(data) && data !== null;
    }
}

module.exports = {Utils};