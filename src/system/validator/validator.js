const validate = require('jsonschema').validate;

class Validator {
    validate(request, schema) {
        const validateResult = validate(request, schema);

        if (validateResult.errors.length) {
            throw new Error(validateResult.errors[0].stack)
        }
    }
}

module.exports = {Validator};