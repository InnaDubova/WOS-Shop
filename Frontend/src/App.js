import { Fragment } from 'react'


import Header from "../src/Components/Header/header";
import Footer from "./Components/Footer/footer";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Header />
        <Footer />

    </Router>
  );
}

export default App;
