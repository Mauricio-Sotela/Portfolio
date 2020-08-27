import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <Router>
      <div>
        < NavBar />
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
