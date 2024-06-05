const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/User');

exports.registerUser = async (username, password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    return 'User registered successfully';
};

exports.loginUser = async (username, password) => {
    const user = await User.findOne({ username });
    if (!user) throw new Error('User not found');
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) throw new Error('Invalid password');
    const token = jwt.sign({ _id: user._id }, 'SECRET_KEY');
    return token;
};

exports.getUserNovels = async (id) => {
    // Tutaj powinien być kod do pobrania powieści użytkownika
    // return User.findById(id).populate('novels');
};