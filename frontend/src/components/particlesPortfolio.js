import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import Particles from 'react-particles-js';

export default class PortfolioParticles extends Component {
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
        type: "square",
        stroke: {
           width: 200,
            blur: 1000,
            opacity: 0.5
        },
      },
      number: {
        value: 10
      },
      line_linked: {
        enable: true,
        distance: 200,
        color: "#fed8b1",
        opacity: 0.6,
        width: 300
    },
      size: {
        value: 3
      }
    }
  }}
/>
      </div>
    );
  }
}
