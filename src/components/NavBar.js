import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../components/logo.svg";
import BurgerMenu from "@material-ui/icons/MenuOutlined";
function NavBar() {
  const [scrolled, setScrolled] = useState("nav__container");

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset < 10) {
      setScrolled("nav__container");
    } else {
      setScrolled("scrolled");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className={scrolled}>
      <nav className="container main_nav">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About Me</Link>
          </li>
          <li>
            <Link to="/Skills">Skills</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>
        <div className='burgerMenu'>{<BurgerMenu />}</div>
      </nav>
    </div>
  );
}

export default NavBar;
