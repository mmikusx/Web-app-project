import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../stylesheets/AddBook.css';

function AddBook({ userId, onClose }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [categories, setCategories] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [visits] = useState(0);
    const [total_reviews] = useState(0);
    const [average_rating] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBook = {
            title,
            author,
            description,
            categories: categories.split(',').map(category => category.trim()),
            visits,
            uploaded_by: userId,
            cover_img_ref: coverImage,
            total_reviews,
            average_rating
        };

        try {
            await axios.post('http://localhost:3000/books', newBook);
            onClose();
        } catch (error) {
            console.error("Error adding book", error);
        }
    };

    return (
        <div className="add-book-form">
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </label>
                <label>
                    Author:
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </label>
                <label>
                    Description:
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                </label>
                <label>
                    Categories (comma separated):
                    <input type="text" value={categories} onChange={(e) => setCategories(e.target.value)} required />
                </label>
                <label>
                    Cover Image URL:
                    <input type="text" value={coverImage} onChange={(e) => setCoverImage(e.target.value)} />
                </label>
                <button type="submit">Add Book</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
}

export default AddBook;
