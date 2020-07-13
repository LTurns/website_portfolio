import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';

export default class NavBar extends Component {


  render(){

    return (
      <div>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="nav-link">NavBar</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
        <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/portfolio" className="nav-link">Portfolio</Link>
        </li>
        <li className="nav-item">
        <Link to="/contact" className="nav-link">Contact</Link>
        </li>
      </ul>
    </div>
  </nav> 
  </div> );

  }
}