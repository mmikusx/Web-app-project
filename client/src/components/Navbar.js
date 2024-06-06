import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";

function Navbar() {

  return (
    <nav>
      <ul >
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;