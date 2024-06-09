const Chapter = require('../Models/Chapter');

exports.getChaptersByBookId = async (bookId) => {
    return await Chapter.find({ book_id: bookId });
}

exports.getChapterById = async (id) => {
    return await Chapter.findById(id);
}

exports.createChapter = async (chapterData) => {
    const chapter = new Chapter(chapterData);
    return await chapter.save();
}

exports.updateChapter = async (id, chapterData) => {
    return await Chapter.findByIdAndUpdate(id, chapterData, { new: true });
}

exports.deleteChapter = async (id) => {
    return await Chapter.findByIdAndDelete(id);
}