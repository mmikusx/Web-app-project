import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../stylesheets/TitleOrAuthor.css';

function SearchBar() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        if (query) {
            navigate(`/books/search/${query}`);
        }
    };

    return (
        <form onSubmit={handleSearch} className="search-form">
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Search by title or author"
                className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
        </form>
    );
}

export default SearchBar;
