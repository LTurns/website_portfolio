import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import HomeParticles from './particlesHome'
import PortfolioParticles from './particlesPortfolio'
// we send the data to mongoDB using the axios post http method.
// first install on computer
import axios from "axios";

export default class Home extends Component {


  render() {
    return ( <div> 
      
  <div>
       <PortfolioParticles />
    </div>

 <div class="dropping-texts"> 
  <div><h1 id="software">Software</h1></div>
  <div><h1 id="dev">Development</h1></div>
  <div><h1 id="portfolio">Portfolio</h1></div>
</div>
</div>
    );
  }
}
