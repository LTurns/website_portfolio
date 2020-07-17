import React, { Component } from "react";
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
            opacity: 0.5,
            color: "#c8a2c8 ",
        },
      },
      number: {
        value: 15
      },
      line_linked: {
        enable: true,
        distance: 200,
        // color: "#fed8b1",
        color: "#fbaed2",
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
