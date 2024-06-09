const ChapterServices = require('../Services/ChapterServices');

exports.chapters = async (req, res) => {
    const chapters = await ChapterServices.getChaptersByBookId(req.params.bookId);
    return res.json(chapters);
}

exports.show_chapter = async (req, res) => {
    const chapter = await ChapterServices.getChapterById(req.params.id);
    return res.json(chapter);
}

exports.create = async (req, res) => {
    const chapter = await ChapterServices.createChapter(req.body);
    return res.json(chapter);
}

exports.update = async (req, res) => {
    const updatedChapter = await ChapterServices.updateChapter(req.params.id, req.body);
    return res.json(updatedChapter);
}

exports.delete = async (req, res) => {
    await ChapterServices.deleteChapter(req.params.id);
    return res.json({ message: 'Chapter deleted' });
}