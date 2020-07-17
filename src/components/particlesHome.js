import React, { Component } from "react";
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
