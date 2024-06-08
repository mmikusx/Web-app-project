import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../../stylesheets/CategoryFilter.css';

const CategoryFilter = forwardRef((props, ref) => {

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:3000/books');
                const categories = [...new Set(response.data.map(book => book.categories).flat())];
                setCategories(categories);
            } catch (error) {
                setError(error.response?.data || "An error occurred during fetching categories");
                alert(error.response?.data || "An error occurred during fetching categories");
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        if (selectedCategory !== "All") {
            navigate(`/books/category/${selectedCategory}`);
        }
    }, [selectedCategory, navigate]);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    useImperativeHandle(ref, () => ({
        resetCategory() {
            setSelectedCategory("All");
            console.log("Category reset from Filter", selectedCategory)
        }
    }));

    return (
        <div className="filter-container">
            <label htmlFor="category">Filter by category:</label>
            <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
                <option value="All">All</option>
                {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
        </div>
    );

});

export default CategoryFilter;