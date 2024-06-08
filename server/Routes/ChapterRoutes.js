const express = require('express');
const router = express.Router();
const ChapterController = require('../controllers/ChapterController');

router.get('/books/:bookId/chapters', ChapterController.chapters);
router.get('/chapters/:id', ChapterController.show_chapter);
router.post('/chapters', ChapterController.create);
router.put('/chapters/:id', ChapterController.update);
router.delete('/chapters/:id', ChapterController.delete);

module.exports = router;