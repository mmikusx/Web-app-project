const BookReviewServices = require('../Services/BookReviewService');

exports.create = async (req, res) => {
    const review = await BookReviewServices.createReview(req.body);
    return res.json(review);
}

exports.reviews = async (req, res) => {
    const reviews = await BookReviewServices.getReviewsByBookId(req.params.bookId);
    return res.json(reviews);
}