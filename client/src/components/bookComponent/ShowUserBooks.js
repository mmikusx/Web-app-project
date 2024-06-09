import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import '../../stylesheets/BookById.css';

function UserBooks() {
    const { id } = useParams();
    const [books, setBooks] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            console.log("User id: ", id);
            try {
                const response = await axios.get(`http://localhost:3000/user/${id}/books`);
                setBooks(response.data);
                console.log("Book fetched successfully");
                setLoading(false);
            } catch (error) {
                setError(error.response?.data || "An error occurred during fetching book");
                // alert(error.response?.data || "An error occurred during fetching book");
                setLoading(false);
            }
        };

        fetchBooks();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="books-container">
            <div className="books-list">
                {books.map(book => (
                    <li key={book._id} className="book-item">
                        <h3>
                            <Link to={`/books/${book._id}`}>{book.title}</Link>
                        </h3>
                        <p><strong>Author:</strong>{book.author}</p>
                    </li>
                ))}
            </div>
        </div>
    );
};

export default UserBooks;