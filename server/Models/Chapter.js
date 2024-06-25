const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChapterSchema = new Schema({
    book_id: { type: Schema.Types.ObjectId, ref: 'Book' },
    chapter_id: Number,
    title: String,
    content: String,
    release_date: String
});

module.exports = mongoose.model('Chapter', ChapterSchema);