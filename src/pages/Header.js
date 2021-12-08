import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="App-header">
      <ul className="nav  nav-fill">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact Me
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
