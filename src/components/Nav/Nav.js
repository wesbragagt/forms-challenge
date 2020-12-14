import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <h3 className="logo">XOLIS Challenge</h3>
      <ul className="nav-links">
        <Link to="/" className="nav-link">
          <li>Form</li>
        </Link>
        <Link to="/tickets" className="nav-link">
          <li>Tickets</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
