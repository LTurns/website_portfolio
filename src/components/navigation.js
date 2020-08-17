import React, { Component } from "react";
import '../navigation.css';

export default class Navigation extends Component {


  render () {

    return (
<nav className="navbar-expand">

<ul className="navbar-nav">
  <li className="nav-item">
    <a className="nav-link" href="/">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/about">About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/portfolio">Portfolio</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/contact">Contact</a>
  </li>
</ul>

</nav>);
    
    
  }
}