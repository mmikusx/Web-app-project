const UserService = require('../Services/UserServices');

exports.register = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send('Username or password not provided');
    }
    const status = await UserService.registerUser(username, password);
    if (status !== 0) {
        return res.status(400).send('User already exists');
    }
    res.send('User successfully registered');
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send('All fields are required');
    }
    const token = await UserService.loginUser(username, password);
    if (token === null) {
        return res.status(400).send('Invalid username or password');
    }
    res.send({ token });
};

exports.userNovels = async (req, res) => {
    const { id } = req.params;
    const novels = await UserService.getUserNovels(id);
    res.send(novels);
};