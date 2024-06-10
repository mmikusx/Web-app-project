const BookReview = require('../models/BookReview');

exports.createReview = async (reviewData) => {
    const review = new BookReview(reviewData);
    await review.save();
    return review;
};

exports.getReviewsByBookId = async (bookId) => {
    return await BookReview.find({ book_id: bookId });
};