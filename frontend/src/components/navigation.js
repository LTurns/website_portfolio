import { slide as Menu } from 'react-burger-menu'
import React, { Component } from "react";
import icon from '..//menu.png';
import '../burger.css';

export default class Navigation extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
       <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/portfolio">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Portfolio</a> */}
      </Menu>
    );
  }
}