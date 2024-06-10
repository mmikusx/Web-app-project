// Chapter.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// import CommentSection from "../commentComponent/commentSection"; // Import the CommentSection component
import '../../stylesheets/Chapter.css';

function Chapter() {
    const { bookId, chapterId } = useParams();
    const navigate = useNavigate();
    const [chapter, setChapter] = useState(null);
    const [chapters, setChapters] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchChapter = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/chapters/${chapterId}`);
                setChapter(response.data);
                const chaptersResponse = await axios.get(`http://localhost:3000/books/${bookId}/chapters`);
                setChapters(chaptersResponse.data.sort((a, b) => a.chapter_id - b.chapter_id));
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
        const currentInd = chapters.findIndex(chap => chap._id === chapterId);
        if(currentInd < chapters.length - 1) {
            navigate(`/books/${bookId}/${chapters[currentInd + 1]._id}`);
        }
    };

    const goToPreviousChapter = () => {
        const currentInd = chapters.findIndex(chap => chap._id === chapterId);
        if (currentInd > 0) {
            navigate(`/books/${bookId}/${chapters[currentInd - 1]._id}`);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const currentInd = chapters.findIndex(chap => chap._id === chapterId);

    return (
        <div className="chapter-container">
            <h3>Chapter {chapter.chapter_id}</h3>
            <div className="chapter-navigation">
                <button 
                    onClick={goToPreviousChapter} 
                    style={{ visibility: currentInd > 0 ? 'visible' : 'hidden' }}>
                    Previous Chapter
                </button>
                <button 
                    onClick={goToNextChapter} 
                    style={{ visibility: currentInd < chapters.length - 1 ? 'visible' : 'hidden' }}>
                    Next Chapter
                </button>
            </div>
            <div className="chapter-content">
                {chapter.content.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
            <div className="chapter-navigation">
                <button 
                    onClick={goToPreviousChapter} 
                    style={{ visibility: currentInd > 0 ? 'visible' : 'hidden' }}>
                    Previous Chapter
                </button>
                <button 
                    onClick={goToNextChapter} 
                    style={{ visibility: currentInd < chapters.length - 1 ? 'visible' : 'hidden' }}>
                    Next Chapter
                </button>
            </div>
            {/* <CommentSection chapterId={chapter._id} /> */}
        </div>
    );
}

export default Chapter;
