import { detectCollision } from './collision_detection'

export default class Brick {

  constructor (game, position){
    this.image = new Image()
    this.image.src = "/images/other_brick.png";
    this.position = position;
    this.width = 100;
    this.height = 30;
    this.game = game;
    this.markedForDeletion = false;

    // we have a lot less instance variables here because we don't need as many -
    // the bricks aren't moving.
  }



  update(){
   if(detectCollision(this.game.ball, this)){
    this.game.ball.speed.y = -this.game.ball.speed.y;

    this.markedForDeletion = true;
   }
  }



  draw(ctx){
  var grd = ctx.createLinearGradient(1, 0, 0, 1);
  grd.addColorStop(0, "#a9a9a9");
  grd.addColorStop(1, "white");

// Fill with gradient
  ctx.fillStyle = grd;
  ctx.fillRect(this.position.x, this.position.y, this.width, this.height);    
    // ctx.fillStyle = '#d3d3d3'
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height); 
     };


  //  ctx.drawImage (
  //    this.image,
  //    this.position.x,
  //    this.position.y,
  //    this.width,
  //    this.height
  //  )
  // }
}
