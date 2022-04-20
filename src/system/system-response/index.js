class SystemResponse {
    response(data) {
        const {positive = true, ..._data} = data;
        if (!positive) {
            return {error: _data};
        }
        return {data: _data};
    }
}

module.exports = {SystemResponse};
