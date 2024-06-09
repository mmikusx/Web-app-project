import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import '../../stylesheets/ChapterList.css';

function ChaptersList() {
    const { id } = useParams();
    const [chapters, setChapters] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchChapters = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/books/${id}/chapters`);
                const sortedChapters = response.data.sort((a, b) => a.chapter_id - b.chapter_id);
                setChapters(sortedChapters);
                setLoading(false);
            } catch (error) {
                setError(error.response?.data || "An error occurred during fetching book");
                alert(error.response?.data || "An error occurred during fetching book");
                setLoading(false);
            }
        };

        fetchChapters();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="chapters-list-container">
            <h3>Chapters</h3>
            <ul className="chapters-list">
                {chapters.map((chapter) => (
                    <li key={chapter.chapter_id} className="chapter-item">
                        <Link to={`/books/${chapter.book_id}/${chapter._id}`}>
                            <h4>Chapter {chapter.chapter_id}</h4>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ChaptersList;
