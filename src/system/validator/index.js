const {Validator} = require('./validator.js');
const schemaItems = {
    params: {
        'type': 'array',
        'items': {
            'type': 'object',
        },
    },
    string: {'type': 'string'},
    number: {'type': 'number'},
};

module.exports = {
    Validator,
    schemaItems,
};
