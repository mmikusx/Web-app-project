import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../../stylesheets/BookById.css';
import AddBook from './AddBook';
import AddChapter from './AddChapter'; // Import AddChapter component

function UserBooks() {
    const [userId, setUserId] = useState(null);
    const [booksArr, setBooks] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [showAddBook, setShowAddBook] = useState(false);
    const [showAddChapter, setShowAddChapter] = useState({ show: false, bookId: null, chapterNumber: null });

    useEffect(() => {
        fetchBooks();
    }, []);

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
            setLoading(false);
        } catch (error) {
            setError(error.response?.data || "An error occurred during fetching books");
            setLoading(false);
        }
    };

    const handleAddBookClick = () => {
        setShowAddBook(true);
    };

    const handleCloseAddBook = () => {
        setShowAddBook(false);
        fetchBooks();
    };

    const handleAddChapterClick = (bookId, chapterNumber) => {
        setShowAddChapter({ show: true, bookId, chapterNumber });
    };

    const handleCloseAddChapter = () => {
        setShowAddChapter({ show: false, bookId: null, chapterNumber: null});
        fetchBooks();
    };

    const handleDeleteBook = async (bookId) => {
        try {
            await axios.delete(`http://localhost:3000/books/${bookId}`);
            fetchBooks();
        } catch (error) {
            console.error("Error deleting book", error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!userId) {
        return <div>404 - User not found</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const renderBooks = () => {
        if (!booksArr || booksArr.length === 0) {
            return <div>No books found for this user.</div>;
        }
        return (
            <div className="books-list">
                {booksArr.map(book => (
                    <li key={book._id} className="book-item">
                        <h3>
                            <Link to={`/books/${book._id}`}>{book.title}</Link>
                        </h3>
                        <p><strong>Author:</strong> {book.author}</p>
                        <button onClick={() => handleAddChapterClick(book._id, book.chapterNumber)}>Add Chapter</button>
                        <button onClick={() => handleDeleteBook(book._id)}>Delete Book</button>
                    </li>
                ))}
            </div>
        );
    };

    return (
        <div className="books-container">
            <button onClick={handleAddBookClick}>Add Book</button>
            {showAddBook && <AddBook userId={userId} onClose={handleCloseAddBook} />}
            {showAddChapter.show && (
                <AddChapter bookId={showAddChapter.bookId} chapterNumber={showAddChapter.chapterNumber} onClose={handleCloseAddChapter} />
            )}
            {renderBooks()}
        </div>
    );    
};

export default UserBooks;
