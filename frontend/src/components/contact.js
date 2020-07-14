import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ContactParticles from './particlesContact';


export default class Contact extends Component {


  render() {
    return (
      <div className="table-wrapper">
       <h1>Hello World!</h1>
      </div> );
  }
}

// //In the above code, we are making HTTP GET request using React Axios and Node/Express JS REST API. We are using React-Bootstrap table to show the Students data on the frontend.