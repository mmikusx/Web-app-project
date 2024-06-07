import '../stylesheets/Navbar.css';
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink className="navbar-link" to="/login">Login</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink className="navbar-link" to="/register">Register</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;