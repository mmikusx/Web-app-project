import React, { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../../stylesheets/BookByCategory.css';

function BooksByCategory() {
    const { category } = useParams();
    const [books, setBooks] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const filterRef = useRef();

    useEffect(() => {
        const fetchBooksByCategory = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/books/category/${category}`);
                setBooks(response.data);
                console.log("Book fetched successfully");
                setLoading(false);
            } catch (error) {
                setError(error.response?.data || "An error occurred during fetching books");
                alert(error.response?.data || "An error occurred during fetching books");
                setLoading(false);
            }
        };

        fetchBooksByCategory();
    }, [category]);

    const handleGoBack = () => {
        console.log("Go back", filterRef.current);
        if (filterRef.current) {
            filterRef.current.resetCategory();
            console.log("Category reset from handle", filterRef.current);
        }
        navigate("/books");
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="books-container">
            <button className="back-button" onClick={handleGoBack}>Go Back</button>
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

export default BooksByCategory;