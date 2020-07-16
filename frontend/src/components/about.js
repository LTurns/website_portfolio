import React from "react";
import PortfolioParticles from "./particlesPortfolio"
import "../about.css"

    function About(){
      return(
        <div className="play">

            <PortfolioParticles />
          <center>            
            <canvas id="gameScreen" width="800" height="600"></canvas>
          </center>
        </div>
      )
    }
    
    export default About