import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Particles from 'react-particles-js';
import Logo from './london_finished.png';
import Home from "./components/home";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Navigation from './components/navigation';
import "./home.css"
import HomeParticles from './components/particlesHome';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
       <Navigation />

      <Route path="/" exact component={Home}/>
      <Route path="/portfolio" exact component={Portfolio}/>
      <Route path="/contact" exact component={Contact}/>
    </Router>
  );
}

export default App;
