import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Particles from 'react-particles-js';
import Logo from './london_finished.png';
import Home from "./components/home";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import NavBar from './components/navbar.component';
import "./home.css"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
       <NavBar />
<Particles
  style={{ position: "absolute" }}
  height="95%"
  width="95%"
  params={{
    particles: {
      shape: {
        type: "circle",
        stroke: {
           width: 10,
            color: "#fe019a", 
            blur: 1,
            opacity: 0.6
        },
      },
      number: {
        value: 50
      },
      line_linked: {
        enable: true,
        distance: 200,
        color: "#FFFFFF",
        opacity: 0.7,
        blur: 150,
        width: 0.5
    },
      size: {
        value: 6
      }
    }
  }}
/>
<Home />
    </Router>
  );
}

export default App;
