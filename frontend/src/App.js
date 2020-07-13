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
       My guess is your page is white, and the particle system is also white by default. I tested this in a codesandbox and sure enough they weren't visible until I changed the background color of the container they were in. You can pass configuration props to the component. Here's a simple demo with the particles and links colored black instead.

<Particles
  style={{ position: "absolute" }}
  height="95%"
  width="95%"
  params={{
    particles: {
      shape: {
        type: "circle",
        stroke: {
           width: 2,
            color: "#fe019a", 
            blur: 100
        },
      },
      number: {
        value: 30
      },
      size: {
        value: 30
      }
    }
  }}
/>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/portfolio" exact component={Portfolio} />
                  <Route path="/contact" exact component={Contact} />
                  <Route path="/edit-portfolio/:id" exact component={Portfolio} />
                </Switch>
    </Router>
  );
}

export default App;
