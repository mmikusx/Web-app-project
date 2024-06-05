const UserService = require('../Services/UserServices');

exports.register = async (req, res) => {
    const { username, password } = req.body;
    const user = await UserService.registerUser(username, password);
    res.send(user);
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const token = await UserService.loginUser(username, password);
    res.send({ token });
};

exports.userNovels = async (req, res) => {
    const { id } = req.params;
    const novels = await UserService.getUserNovels(id);
    res.send(novels);
};