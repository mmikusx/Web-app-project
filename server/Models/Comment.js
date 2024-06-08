const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    chapter_id: { type: Schema.Types.ObjectId, ref: 'Chapter' },
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    content: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', CommentSchema);