import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <h3 className="logo">XOLIS Challenge</h3>
      <ul className="nav-links">
        <NavLink to="/" className="nav-link" activeClassName="nav-link-selected" exact>
          <li>Form</li>
        </NavLink>
        <NavLink to="/tickets" className="nav-link" activeClassName="nav-link-selected" exact>
          <li>Tickets</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
