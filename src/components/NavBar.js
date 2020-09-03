import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../components/logo.svg";
import BurgerMenu from "@material-ui/icons/MenuOutlined";
import CloseMenu from "@material-ui/icons/Close";
function NavBar() {
  let close = <BurgerMenu />;
  let open = <CloseMenu />;

  const [menu, setMenu] = useState(close);
  const [counter, setCounter] = useState(0);
  const resetCounter = () => {
    if (counter === 1) {
      setCounter(0);
      setMenu(close);
    }
  };
  const handleMenu = () => {
    if (counter === 0) {
      setMenu(open);
      setCounter(1);
    } else if (counter === 1) {
      setMenu(close);
      setCounter(0);
    }
  };
  const handleResize = () => {
    if (window.innerWidth > 700) {
      setMenu(close);
    }
  };

  const [scrolled, setScrolled] = useState("nav__container");

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset < 10) {
      setScrolled("nav__container");
    } else {
      setScrolled("nav__container scrolled");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className={scrolled}>
      <nav className="container main_nav">
        <div className="logo">
          <Link to="/Portfolio">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="menu__container">
          <ul className={counter === 1 ? "menuOpen" : ""}>
            <li
              onClick={() => {
                resetCounter();
              }}
            >
              <Link to="/Portfolio">Home</Link>
            </li>
            <li
              onClick={() => {
                resetCounter();
              }}
            >
              <Link to="/about">About Me</Link>
            </li>
            <li
              onClick={() => {
                resetCounter();
              }}
            >
              <Link to="/skills">Skills</Link>
            </li>
            <li
              onClick={() => {
                resetCounter();
              }}
            >
              <Link to="/projects">Projects</Link>
            </li>
            <li
              onClick={() => {
                resetCounter();
              }}
            >
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </div>
        <div
          className="burgerMenu"
          onClick={() => {
            handleMenu();
          }}
        >
          {menu}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
