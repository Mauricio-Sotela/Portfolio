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

  const handleMenu = () => {
    if (counter === 0) {
      setMenu(open);
      setCounter(1);
      console.log(counter);
    } else if (counter === 1) {
      setMenu(close);
      setCounter(0);
      console.log(counter);
    }
  };

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
