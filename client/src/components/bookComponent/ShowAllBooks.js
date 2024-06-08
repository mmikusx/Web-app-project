import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../../stylesheets/Books.css';

function Books() {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:3000/books');
                console.log("Books fetched successfully");
                setBooks(response.data);
            } catch (error) {
                setError(error.response?.data || "An error occurred during fetching books");
                alert(error.response?.data || "An error occurred during fetching books");
            }
        };

        fetchBooks();
    }, []);

    return (
        <div className="books-container">
            <h1>Books</h1>
            <ul className="books-list">
                {books.map(book => (
                    <li key={book._id} className="book-item">
                        <h3>
                            <Link to={`/books/${book._id}`}>{book.title}</Link>
                        </h3>
                        <p><strong>Author:</strong>{book.author}</p>
                        <p><strong>Categories:</strong>{book.categories.join(", ")}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Books;