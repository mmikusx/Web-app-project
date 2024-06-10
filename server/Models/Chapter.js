const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChapterSchema = new Schema({
    book_id: { type: Schema.Types.ObjectId, ref: 'Book' },
    title: String,
    content: String,
});

module.exports = mongoose.model('Chapter', ChapterSchema);