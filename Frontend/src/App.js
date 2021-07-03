import { Fragment } from 'react'


import Header from "../src/Components/Header/header";
import Footer from "./Components/Footer/footer";
import About_us from "./Components/AboutUs/about-us";
import Contact from "./Components/Contact/contact";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <Router>
        <Header />
        <Switch>
          <Route path="/contact" exact component={Contact} />
          <Route path="/about-us" exact component={About_us} />
          {/* <Route path="/" exact /> */}
        </Switch>
        <Footer />

    </Router>
  );
}

export default App;
