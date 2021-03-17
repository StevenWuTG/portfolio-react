
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import AboutMe from "./components/AboutMe"
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {
  return (
    <>
    <Router>
    <Navbar></Navbar>
    <Switch>
      <Route path="/about">
        <AboutMe/>  
      </Route>
      <Route path="/portfolio">
        {/* <Portfolio/> */}
      </Route>
      <Route path="/contact">
        {/* <ContactMe/> */}
      </Route>
    </Switch>
    
    </Router>
    </>
  );
}

export default App;
