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
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();


let lastTime = 0;

function gameLoop(timestamp){
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  game.update(deltaTime);
  game.draw(ctx);

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
