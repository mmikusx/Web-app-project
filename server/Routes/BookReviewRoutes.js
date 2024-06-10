const express = require('express');
const BookReviewController = require('../Controllers/BookReviewController');

const router = express.Router();

router.post('/reviews', BookReviewController.create);
router.get('/books/:bookId/reviews', BookReviewController.reviews);

module.exports = router;