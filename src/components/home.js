import React, { Component } from "react";
import PortfolioParticles from './particlesPortfolio'

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
