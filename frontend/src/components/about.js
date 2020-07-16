import React from "react";
import HomeParticles from "./particlesHome"
import "../about.css"

    function About(){
      return(
        <div className="play">
           <div>
            <HomeParticles />
            </div>
            <div>
          <center>            
            <canvas id="gameScreen" width="800" height="500"></canvas>
          </center>
          </div>
        </div>
      )
    }
    
    export default About