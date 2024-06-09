import '../stylesheets/Navbar.css';
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ isLoggedIn, handleLogout, userId }) {

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink className="navbar-link" to="/books">Books</NavLink>
        </li>
        {!isLoggedIn && (
          <>
          <li className="navbar-item">
            <NavLink className="navbar-link" to="/login">Login</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink className="navbar-link" to="/register">Register</NavLink>
          </li>
          </>
        )}
        {isLoggedIn && (
          <>
            <li className="navbar-item">
              <button className="navbar-link" onClick={handleLogout}>Logout</button>
            </li>
            <li className='navbar-item'>
              <NavLink className='navbar-link' to={`/user/${userId}/books`}>Your Books</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;