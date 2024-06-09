const Comment = require('../Models/Comment');

exports.getCommentsByChapterId = async (chapterId) => {
    return await Comment.find({ chapter_id: chapterId });
}

exports.createComment = async (commentData) => {
    const comment = new Comment(commentData);
    return await comment.save();
}

exports.deleteComment = async (id) => {
    return await Comment.findByIdAndDelete(id);
}