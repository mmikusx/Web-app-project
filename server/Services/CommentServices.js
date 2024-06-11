const Comment = require('../Models/Comment');

exports.getCommentsByBookId = async (bookId) => {
    return await Comment.find({ book_id: bookId });
}

exports.getAllComments = async () => {
    return await Comment.find();
}

exports.createComment = async (commentData, bookId) => {
    const comment = new Comment({
        ...commentData,
        book_id: bookId
    });
    return await comment.save();
}

exports.deleteComment = async (id) => {
    return await Comment.findByIdAndDelete(id);
}