const validate = require('jsonschema').validate;

class Validator {
    validate(request, schema) {
        const validateResult = validate(JSON.parse(request), schema);

        if (validateResult.errors.length) {
            console.log(validateResult.errors[0].stack);
            throw new Error(validateResult.errors[0].stack)
        }
    }
}

module.exports = {Validator};