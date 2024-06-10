const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookReviewSchema = new Schema({
    book_id: { type: Schema.Types.ObjectId, ref: 'Book' },
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    content: String,
    rating: Number,
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 }
});

module.exports = mongoose.model('BookReview', BookReviewSchema);