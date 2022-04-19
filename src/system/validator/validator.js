const validate = require('jsonschema').validate;

class Validator {
    validate(request, schema) {
        const validateResult = validate(request, schema);

        if (validateResult.errors.length) {
            console.error(`(${new Date().toLocaleString()}) VALIDATION ERROR >>>>>>>>>>: `, validateResult.errors[0].stack);
            throw {
                code: 404,
                name: 'validationError',
                message: validateResult.errors[0].stack,
                schema: validateResult.errors[0].schema,
            };
        }
    }
}

module.exports = {Validator};