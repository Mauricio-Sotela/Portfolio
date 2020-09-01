import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
 import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
        <Route exact path="/skills">
            <Skills />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/portfolio">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Switch>
        <Footer/><Footer/><Footer/><Footer/><Footer/>
      </div>
    </Router>
  );
}
