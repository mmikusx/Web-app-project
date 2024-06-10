import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import '../../stylesheets/BookById.css';
import CommentSection from "../commentComponent/commentSection";

function Book() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/books/${id}`);
                console.log(response.data);
                setBook(response.data);
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

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="book-container">
            <div className="book-detail-container">
                <div className="book-detail-content">
                    <h3>{book.title}</h3>
                    <p><strong>Author:</strong>{book.author}</p>
                    <p><strong>Description:</strong>{book.description}</p>
                    <p><strong>Categories:</strong>{book.categories.join(", ")}</p>
                    <p><strong>Visits:</strong>{book.visits}</p>
                    <p><strong>Reviews:</strong> {book.total_reviews}</p>
                    <p><strong>Rating:</strong> {book.average_rating}</p>
                    <p><strong>Chapter Number:</strong> {book.chapterNumber}</p>
                </div>
                <div className="book-detail-image">
                    <img src={require("/public/img-global/" + book.title + ".jpg")} alt={book.title} />
                </div>
            </div>
            <div className="chapters-button-container">
                <Link to={`/books/${book._id}/chapters`}>
                    <button>View Chapters</button>
                </Link>
            </div>
            <CommentSection bookId={book._id} />
        </div>
    );
}

export default Book;
