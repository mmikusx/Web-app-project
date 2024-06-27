import React, { useState } from 'react';
import axios from 'axios';
import '../../stylesheets/AddChapter.css';

function AddChapter({ bookId, chapterNumber, onClose }) {
    const [chapterContent, setChapterContent] = useState('');

    const getCurrentDate = () => {
        const date = new Date();
        return date.getFullYear() + "-" + (date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) + "-" + date.getDate();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newChapter = {
            chapter_id: chapterNumber + 1,
            content: chapterContent,
            book_id: bookId,
            release_date: getCurrentDate()
        };

        try {
            await axios.post(`http://localhost:3000/chapters`, newChapter);
            onClose();
        } catch (error) {
            console.error("Error adding chapter", error);
        }
    };

    return (
        <div className="add-chapter-form">
            <form onSubmit={handleSubmit}>
                <label>
                    Chapter Content:
                    <textarea value={chapterContent} onChange={(e) => setChapterContent(e.target.value)} required></textarea>
                </label>
                <button type="submit">Add Chapter</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
}

export default AddChapter;
