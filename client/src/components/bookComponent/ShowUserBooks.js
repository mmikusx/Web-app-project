import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../../stylesheets/BookById.css';

function UserBooks() {
    const [userId, setUserId] = useState(null);
    const [booksArr, setBooks] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            const userId = localStorage.getItem("userId");
            setUserId(userId);

            if (!userId) {
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(`http://localhost:3000/user/${userId}/books`);
                setBooks(response.data);
                console.log("Books fetched successfully");
                setLoading(false);
            } catch (error) {
                setError(error.response?.data || "An error occurred during fetching books");
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!userId) {
        return <div>404 - User not found</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!booksArr || booksArr.books.length === 0) {
        return <div>No books found for this user.</div>;
    }

    return (
        <div className="books-container">
            <div className="books-list">
                {booksArr.books.map(book => (
                    <li key={book._id} className="book-item">
                        <h3>
                            <Link to={`/books/${book._id}`}>{book.title}</Link>
                        </h3>
                        <p><strong>Author:</strong> {book.author}</p>
                    </li>
                ))}
            </div>
        </div>
    );
};

export default UserBooks;
