var GRAVITY = 0.1;
var maxParticles = 100;
var minParticles = 100;
function ParticleSystem(x, y, r=255, g=255, b=255){
  this.x = x;
  this.y = y;
  this.pList = [];
  this.gravity = createVector(0, GRAVITY);
  this.color = [r,g,b];
  this.c = createVector(r, g, b);

  this.draw = function(){

    if(this.pList.length <= minParticles){
      for(var j = 0; j<1; j++){
        this.addParticle(new Particle(this.x, this.y));
      }
    }
    for(var i=0; i<this.pList.length; i++){
      stroke(this.c.x, this.c.y, this.c.z);
      this.pList[i].display();
      this.pList[i].applyForce(p5.Vector.random2D().mult(0.35));
      this.pList[i].applyForce(this.gravity);
      this.pList[i].update();

      if(this.pList[i].pos.y > 600){
        var index = i;
        this.pList.splice(index, 1);
        i -=1;
        for(var j = 0; j<1; j++){
          this.addParticle(new Particle(this.x, this.y));
        }
      }
    }
  }

  this.addParticle = function(p){
    this.pList.push(p);
  }

  this.populate = function(){

  }
}
