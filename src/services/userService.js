const { validateRegister } = require('../validators/userValidator');

async function registerUser(data) {
    validateRegister(data);

    const { name, email, password } = data;
    const existingUser = await findUserByEmail(email);
    if (existingUser) throw new Error('User already exists');

    const user = await createUser({ name, email, password });
    return user;
}

module.exports = { registerUser };
