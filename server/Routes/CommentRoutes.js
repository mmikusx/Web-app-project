const express = require('express');
const router = express.Router();
const CommentController = require('../Controllers/CommentController');

router.get('/books/:bookId/comments', CommentController.comments);
router.post('/books/:bookId/comments', CommentController.create);
router.delete('/comments/:id', CommentController.delete);
router.get('/comments', CommentController.getAll);

module.exports = router;