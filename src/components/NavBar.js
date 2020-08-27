import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="nav__container">
      <nav className="container main_nav">
        <ul>
          <li>
            <Link to="/Portfolio">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
