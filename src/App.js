import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/home";
import Portfolio from "./components/portfolio";
import About from "./components/about"
import Navigation from './components/navigation';
import Contact from './components/contact'
import "./home.css"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
       <Navigation />

      <Route path="/" exact component={Home}/>
      <Route path="/portfolio" exact component={Portfolio}/>
      <Route path="/contact" exact component={Contact}/>
      <Route path="/about" exact component={About}/>
    </Router>
  );
}

export default App;
