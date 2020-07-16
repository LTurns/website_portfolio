import { detectCollision } from './collision_detection'

export default class Brick {

  constructor (game, position){
    this.image = new Image()
    this.image.src = "/images/brick.png";
    this.position = position;
    this.width = 80;
    this.height = 70;
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
   ctx.drawImage (
     this.image,
     this.position.x,
     this.position.y,
     this.width,
     this.height
   )
  }
}
