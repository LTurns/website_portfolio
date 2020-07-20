import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import 'bootstrap/dist/css/bootstrap.css';
import Game from './game.js'

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
  document.getElementById("root")
);


let canvas = document.getElementById("gameScreen");
// only loads the canvas if the id "gamescreen" has been found

if (canvas != null){
let ctx = canvas.getContext("2d");
const GAME_WIDTH = 1000;
const GAME_HEIGHT = 400;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();


let lastTime = 0;

function gameLoop(timestamp){
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  ctx.fillStyle = "white";
  // ctx.textAlign = "center";
  ctx.font = '15px Arial';
  ctx.textAlign = 'center';
  ctx. textBaseline = 'middle';
  ctx.fillText('For Fun:', 250, 18);
  ctx.fillText('Forever brunching & pub-lunching with friends', 200, 53);
  ctx.fillText('Listening to vinyl records', 200, 93);
  ctx.fillText('Tennis or a little jog for fitness', 200, 133);
  ctx.fillText('Playing keys or composing music', 200, 173);
  ctx.fillText('Any chance to be creative!', 200, 213);

  ctx.fillText('Always bubbly and optimistic', 200, 260);
  ctx.fillText('Strong and professional communicator', 200, 300);
  ctx.fillText('Agile developer and good team player', 200, 343);

  

  ctx.fillText('* * * * * * * * * * * * * * *', 500, 175)
  ctx.fillText('Use the arrow keys', 500, 200)
  ctx.fillText('to move the paddle', 500, 230)
  ctx.fillText('and see skills', 500, 260)
  ctx.fillText('& tech stack!', 500, 290)
  ctx.fillText('* * * * * * * * * * * * * * *', 500, 320)

  ctx.fillText('Tech Stack:', 800, 18);
  ctx.fillText('React, Bootstrap, CSS, HTML', 800, 53);
  ctx.fillText('JQuery, SVG, Canvas HTML5', 800, 93);
  ctx.fillText('Node JS, Sinatra (Ruby)', 800, 133);
  ctx.fillText('MongoDB, postgreSQL, mySQL', 800, 173);
  ctx.fillText('Jest, Jasmine, RSpec, Cypress', 800, 213);

  ctx.fillText('Keen to develop and learn new skills', 800, 260);
  ctx.fillText('Confident writter', 800, 300);
  ctx.fillText('Entrepreneurial spirit', 800, 343);



  game.update(deltaTime);
  game.draw(ctx);




  // ctx.fillText('Tennis or a little jog for fitness', 100, 133);
  // ctx.fillText('Playing keys or having a singsong', 100, 173);
  ctx.fillText('', 500, 203);


// ctx.fillText('Skills!', 60, 83);
// ctx.fillText('Skills!', 150, 50);
// ctx.fillText('Skills!', 150, 50);
// ctx.fillText("Direct the planet to see different skills & hobbies!", canvas.width/2, 80);

  requestAnimationFrame(gameLoop);
  // this is where the timestamp comes from.Every time this
  // method runs, when the next frame is ready, call the game loop again
  // and pass it the timestamp.
  // It will then again calculate the delta time, pass it into the update function and continue.
  //
}

requestAnimationFrame(gameLoop);

}

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
