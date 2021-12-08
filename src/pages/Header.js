import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../constants/routes";

function Header() {
  return (
    <div className="App-header">
      <ul className="nav  nav-fill">
        <li className="nav-item">
          <Link className="nav-link active" to={routes.HOME}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={routes.CONTACT}>
            Contact Me
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to={routes.ABOUT}>
            About
          </Link>
        </li> */}
      </ul>
    </div>
  );
}

export default Header;
