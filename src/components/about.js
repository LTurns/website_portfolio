import React from "react";
import HomeParticles from "./particlesHome"
import "../about_text.css"
import "../home.css"

    function About(){
      return(
        <div className="play">
           <div>
            </div>
            <HomeParticles />
            <div>

          <center>            
            <canvas id="gameScreen" width="1200" height= "600"></canvas>
       
          </center>   </div>
        </div>
      )
    }
    
    export default About