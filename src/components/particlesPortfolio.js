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
            // color: "#c8a2c8",
        },
      },
      number: {
        value: 25
      },
      line_linked: {
        enable: true,
        distance: 200,
        // color: "#808080",
        // color: "#fbaed2",
        color: "#ff007f",
        opacity: 0.9,
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
