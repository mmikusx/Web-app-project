const express = require('express');
const BookController = require('../Controllers/BookController');
const router = express.Router();

router.get('/books', BookController.books);
router.get('/books/popular', BookController.popular);
router.get('/books/category/:category', BookController.searchByCategory);
router.get('/books/search/:titleOrAuthor', BookController.search);
router.get('/books/:id', BookController.show_book);
router.get('/user/:id/books', BookController.userBooks);
router.post('/books', BookController.create);
router.put('/books/:id', BookController.update);
router.delete('/books/:id', BookController.delete);

module.exports = router;