// CommentSection.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentSection = ({ chapterId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [error, setError] = useState("");
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        setUserId(userId);

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
                user_id: userId, // use actual user ID from localStorage
                content: newComment
            });
            setComments((prevComments) => [...prevComments, response.data]);
            setNewComment("");
        } catch (error) {
            alert(error.response?.data || "An error occurred while submitting your comment");
        }
    };

    if (!userId) {
        return (
            <div className="login-prompt">
                <p>You need to be logged in to comment. <a href="/login">Log in</a></p>
            </div>
        );
    }

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
                        <p><strong>Author:</strong> {comment.user_id}</p>
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
