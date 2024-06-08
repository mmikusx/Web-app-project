import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Login from './components/userComponent/Login'
import Registration from './components/userComponent/Registration';
import Books from './components/bookComponent/ShowAllBooks';
import Book from './components/bookComponent/ShowBookById';
import BooksByCategory from './components/bookComponent/ShowBooksByCategory';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    console.log("Logging out");
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<Book />} />
          <Route path="/books/category/:category" element={<BooksByCategory />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
