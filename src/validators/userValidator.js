const Joi = require('joi');

const registerSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

function validateRegister(data) {
    const { error } = registerSchema.validate(data);
    if (error) throw new Error(error.details[0].message);
}

module.exports = { validateRegister };
