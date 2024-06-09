const Chapter = require('../Models/Chapter');
const updateBook = require('./BookServices'); //jak ktoś ma lepszy pomysł to śmiało

exports.getChaptersByBookId = async (bookId) => {
    return await Chapter.find(
        { book_id: bookId },
        { content: 0 }
    );
}

exports.getChapterById = async (id) => {
    return await Chapter.findById(id);
}

exports.createChapter = async (chapterData) => {
    const chapter = new Chapter(chapterData);
    await updateBook(chapterData.book_id, { $inc: { chapterNumber: 1 } });
    return await chapter.save();
}

exports.updateChapter = async (id, chapterData) => {
    return await Chapter.findByIdAndUpdate(id, chapterData, { new: true });
}

exports.deleteChapter = async (id) => {
    await updateBook(chapterData.book_id, { $inc: { chapterNumber: -1 } });
    return await Chapter.findByIdAndDelete(id);
}