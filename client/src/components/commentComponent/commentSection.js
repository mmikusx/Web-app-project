// CommentSection.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentSection = ({ chapterId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/chapters/${chapterId}/comments`);
                setComments(response.data);
            } catch (error) {
                setError(error.response?.data || "An error occurred during fetching comments");
            }
        };

        fetchComments();
    }, [chapterId]);

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleCommentSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/comments', {
                chapter_id: chapterId,
                user_id: '6665d9a9c004d44e0162348c', // replace with actual user ID
                content: newComment
            });
            setComments((prevComments) => [...prevComments, response.data]);
            setNewComment("");
        } catch (error) {
            alert(error.response?.data || "An error occurred while submitting your comment");
        }
    };

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="comments-container">
            <h3>Comments</h3>
            <ul className="comments-list">
                {comments.map((comment) => (
                    <li key={comment._id} className="comment-item">
                        <p>{comment.content}</p>
                        <p><strong>Author:</strong>{comment.author}</p>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleCommentSubmit} className="comment-form">
                <textarea
                    value={newComment}
                    onChange={handleCommentChange}
                    placeholder="Add your comment here"
                    required
                />
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
};

export default CommentSection;
