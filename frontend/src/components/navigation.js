import { slide as Menu } from 'react-burger-menu'
import React, { Component } from "react";
import icon from '..//menu.png';
import '../burger.css';

export default class Navigation extends React.Component {


  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
       <Menu className="bm-menu">
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/portfolio">Portfolio</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <div class="container">
        </div>
      </Menu>
    );
  }
}