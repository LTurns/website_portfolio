import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
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
  params={{
    particles: {
      shape: {
        type: "circle",
        stroke: {
           width: 10,
            color: "#fe019a", 
            blur: 1,
            opacity: 0.6
        },
      },
      number: {
        value: 50
      },
      line_linked: {
        enable: true,
        distance: 200,
        color: "#FFFFFF",
        opacity: 0.7,
        blur: 150,
        width: 0.5
    },
      size: {
        value: 6
      }
    }
  }}
/>
      </div>
    );
  }
}
