import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [scrolled,setScrolled]=useState('nav__container');
  
  const handleScroll=() => {
      const offset=window.scrollY;
      if(offset < 10){
        setScrolled('nav__container');
      }
      else{
        setScrolled('scrolled');
      }
    }
  
    useEffect(() => {
      window.addEventListener('scroll',handleScroll)
    })
  ;
   
  return (
    <div className={scrolled}>
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
