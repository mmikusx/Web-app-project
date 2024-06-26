const mongoose = require('mongoose');
const Schema = mongoose.Schema;

    const BookSchema = new Schema({
    title: String,
    author: String,
    description: String,
    categories: [String],
    visits: Number,
    uploaded_by: { type: Schema.Types.ObjectId, ref: 'User' },
    cover_img_ref: String, // URL do obrazka w folderze
    chapterNumber: { type: Number, default: 0 },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

module.exports = mongoose.model('Book', BookSchema);