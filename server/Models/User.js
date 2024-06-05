const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    // novels: [NovelSchema] // Odkomentuj to, gdy model Novel będzie dostępny
});

module.exports = mongoose.model('User', UserSchema);