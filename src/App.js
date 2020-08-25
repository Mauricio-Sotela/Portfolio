import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/Home'
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {

  return (
    <Router>
      <div>
       <nav className='container main_nav'>
          <ul>
            <li>
              <Link to="/Portfolio">Home</Link>
            </li>
            <li>
              <Link  to="/contact">Contact Me</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
       </nav>

        <Switch>
          <Route exact path="/contact">
            <Contact />
          </Route>
          
          <Route exact path="/Portfolio">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );

  // render = () => (
  //   <div>
  //   <Home />

  //   </div>
  // );
}
