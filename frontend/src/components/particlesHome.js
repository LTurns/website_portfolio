import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import Particles from 'react-particles-js';

export default class HomeParticles extends Component {
  render() {
    return (
      <div>
       <Particles
  style={{ position: "absolute" }}
  height="95%"
  width="95%"
  color="#FFF"
  params={{
    particles: {
      shape: {
        type: "square",
        stroke: {
          color: "#FFF",
            blur: 1000,
        },
        image: { 
          src: "./images/ball.png",
          width: 100,
          height: 100
        }
      },
      number: {
        value: 20
      },
      // line_linked: {
      //   enable: true,
      //   distance: 200,
      //   color: "#FFF",
      //   opacity: 0.7,
      //   width: 3
      size: {
        value: 5
      }
    }
  }}
/>

      </div>
    );
  }
}
