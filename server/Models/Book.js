const mongoose = require('mongoose');
const Schema = mongoose.Schema;

    const BookSchema = new Schema({
    title: String,
    author: String,
    description: String,
    categories: [String],
    visits: Number,
    uploaded_by: { type: Schema.Types.ObjectId, ref: 'User' },
    cover_image: String, // URL do obrazka w folderze
    // chapters: [{ type: Schema.Types.ObjectId, ref: 'Chapter' }]
});

module.exports = mongoose.model('Book', BookSchema);