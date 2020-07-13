import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import Particles from 'react-particles-js';

export default class ContactParticles extends Component {
  render() {
    return (
      <div>
       <Particles
  style={{ position: "absolute" }}
  height="95%"
  width="95%"
  params={{
    particles: {
    //   shape: {
    //     type: "triangle",
    //     stroke: {
    //        width: 50,
    //         color: "#FFFFFF", 
    //         opacity: 0
        // },
    //   },
      number: {
        value: 50
      },
      line_linked: {
        enable: true,
        distance: 200,
        color: "#add8e6",
        opacity: 0.1,
        blur: 15000,
        width: 150
    },
      size: {
        value: 10
      }
    }
  }}
/>
      </div>
    );
  }
}
