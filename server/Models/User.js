const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String,
    books: [{ type: Schema.Types.ObjectId, ref: 'Book' }] // Reference to Book model
});

module.exports = mongoose.model('User', UserSchema);