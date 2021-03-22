
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React, {useState} from "react"
import Navbar from "./components/Navbar"
import AboutMe from "./components/AboutMe"
import Portfolio from "./components/Portfolio"
import ContactMe from "./components/ContactMe"
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from "./components/Home"

function App() {


  return (
    <>
    <Router>

    <Navbar></Navbar>
    
    <Switch>

      <Route path="/home">
        <Home/>
      </Route>

      <Route path="/about" exact>
        <AboutMe/>  
      </Route>

      <Route path="/portfolio">
        <Portfolio/>
      </Route>

      <Route path="/contact">
        <ContactMe/>
      </Route>
    </Switch>
    
    </Router>
    </>
  );
}

export default App;
