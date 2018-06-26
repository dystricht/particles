function Wind(x, y, direction){
  this.pos = createVector(x, y);
  this.direction = direction;

  this.debug = function(){
    //debug color PINK
    stroke(255, 0, 255);
    line(this.pos.x, this.pos.y,
      this.pos.x + (this.direction.x * 100), this.pos.y + (this.direction.y * 100));
  }
}
