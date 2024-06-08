const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/CommentController');

router.get('/chapters/:chapterId/comments', CommentController.comments);
router.post('/comments', CommentController.create);
router.delete('/comments/:id', CommentController.delete);

module.exports = router;