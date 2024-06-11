const CommentServices = require('../Services/CommentServices');

exports.comments = async (req, res) => {
    const comments = await CommentServices.getCommentsByBookId(req.params.bookId);
    return res.json(comments);
}

exports.create = async (req, res) => {
    const comment = await CommentServices.createComment(req.body, req.params.bookId);
    return res.json(comment);
}

exports.delete = async (req, res) => {
    await CommentServices.deleteComment(req.params.id);
    return res.json({ message: 'Comment deleted' });
}

exports.getAll = async (req, res) => {
    try {
        const comments = await CommentServices.getAllComments();
        return res.json(comments);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}