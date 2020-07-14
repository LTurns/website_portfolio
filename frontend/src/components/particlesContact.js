import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import Particles from 'react-particles-js';
import PortfolioParticles from './particlesPortfolio'

export default class ContactParticles extends Component {
  render() {
    return (
      <div>
        <PortfolioParticles />
      </div>
    );
  }
}
