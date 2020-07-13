import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';

export default class NavBar extends Component {


  render(){

    return (
      <div>
        <nav className="navbar">
          <ul className="navbar">
            <li>
              <Link to="/" className="home"><h3>Home</h3></Link>
            </li>
            <li>
              <Link to="/portfolio" className="home"><h3>Portfolio</h3></Link>
            </li>
            <li>
              <Link to="/contact" className="home"><h3>Contact</h3></Link>
            </li>
          </ul>
          </nav>
          </div>)
  }
}