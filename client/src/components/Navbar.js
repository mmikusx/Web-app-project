import '../stylesheets/Navbar.css';
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ isLoggedIn, handleLogout }) {

  return (
    <nav className="navbar">
      <ul className="navbar-list">
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
          <li className="navbar-item">
            <button className="navbar-link" onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;