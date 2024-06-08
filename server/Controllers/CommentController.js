const CommentServices = require('../services/CommentServices');

exports.comments = async (req, res) => {
    const comments = await CommentServices.getCommentsByChapterId(req.params.chapterId);
    return res.json(comments);
}

exports.create = async (req, res) => {
    const comment = await CommentServices.createComment(req.body);
    return res.json(comment);
}

exports.delete = async (req, res) => {
    await CommentServices.deleteComment(req.params.id);
    return res.json({ message: 'Comment deleted' });
}