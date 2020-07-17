import { slide as Menu } from 'react-burger-menu'
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../navigation.css';

export default class Navigation extends React.Component {


  render () {

    return (
<nav className="navbar-expand-sm">


<ul className="navbar-nav">
  <li className="nav-item">
    <a className="nav-link" href="/">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/portfolio">Portfolio</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/about">About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/contact">Contact</a>
  </li>
</ul>

</nav>);

  {/* <Menu className="bm-menu">
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/portfolio">Portfolio</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <div class="container">
        </div>
      </Menu> */}
    
    
  }
}