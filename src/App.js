
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React, {useState} from "react"
import Navbar from "./components/Navbar"
import AboutMe from "./components/AboutMe"
import Portfolio from "./components/Portfolio"
import ContactMe from "./components/ContactMe"
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {
  const [counter, setCounter] = useState(0)


  return (
    <>
    <Router>
    <Navbar></Navbar>
    <Switch>
      <Route path="/about">
        <AboutMe counter={counter} setCounter={setCounter}/>  
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
