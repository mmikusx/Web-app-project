import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../../stylesheets/BookById.css';

function Book() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/books/${id}`);
                setBook(response.data);
                console.log("Book fetched successfully");
                setLoading(false);
            } catch (error) {
                setError(error.response?.data || "An error occurred during fetching book");
                alert(error.response?.data || "An error occurred during fetching book");
                setLoading(false);
            }
        };

        fetchBook();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="book-detail-container">
            <div className="book-detail-content">
                <h3>{book.title}</h3>
                <p><strong>Author:</strong>{book.author}</p>
                <p><strong>Description:</strong>{book.description}</p>
                <p><strong>Categories:</strong>{book.categories.join(", ")}</p>
                <p><strong>Visits:</strong>{book.visits}</p>
            </div>
        </div>
    );
};

export default Book;