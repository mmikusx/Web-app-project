const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    book_id: { type: Schema.Types.ObjectId, ref: 'Book' },
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    content: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', CommentSchema);