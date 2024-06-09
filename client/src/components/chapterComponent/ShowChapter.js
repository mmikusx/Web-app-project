// Chapter.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CommentSection from "../commentComponent/commentSection"; // Import the CommentSection component
import '../../stylesheets/Chapter.css';

function Chapter() {
    const { bookId, chapterId } = useParams();
    const navigate = useNavigate();
    const [chapter, setChapter] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchChapter = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/chapters/${chapterId}`);
                setChapter(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.response?.data || "An error occurred during fetching chapter");
                alert(error.response?.data || "An error occurred during fetching chapter");
                setLoading(false);
            }
        };

        fetchChapter();
    }, [bookId, chapterId]);

    const goToNextChapter = () => {
        navigate(`/books/${bookId}/${parseInt(chapterId) + 1}`);
    };

    const goToPreviousChapter = () => {
        if (parseInt(chapterId) > 1) {
            navigate(`/books/${bookId}/${parseInt(chapterId) - 1}`);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="chapter-container">
            <h3>Chapter {chapter.chapter_id}</h3>
            <div className="chapter-navigation">
                <button onClick={goToPreviousChapter} disabled={parseInt(chapterId) <= 1}>Previous Chapter</button>
                <button onClick={goToNextChapter}>Next Chapter</button>
            </div>
            <div className="chapter-content">
                {chapter.content.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
            <div className="chapter-navigation">
                <button onClick={goToPreviousChapter} disabled={parseInt(chapterId) <= 1}>Previous Chapter</button>
                <button onClick={goToNextChapter}>Next Chapter</button>
            </div>
            <CommentSection chapterId={chapter._id} />
        </div>
    );
}

export default Chapter;
