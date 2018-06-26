function Field(width, height, spacing = 40) {

  this.width = width;
  this.height = height;
  this.spacing = spacing;

  this.vectors = new Array(width/spacing).fill(new Array(height/spacing));
  console.log(this.vectors);


  this.nearestVector = function(posX, posY){

    posX = Math.floor((posX/spacing));
    posY = Math.floor((posY/spacing));
    console.log(this.vectors[posX][posY]);
    return this.vectors[posX][posY];

  }

  this.populate = function(){
    console.log("beginning populate");

    for(var i=0; i<= this.width/spacing-1; i++){
      for(var j=0; j<= this.height/spacing-1; j++){
        this.vectors[i][j] = createVector(0, -5);
      }
    }
  }

  this.debug = function(){
    for(var i=0; i<= this.vectors.length-1; i++){
      for(var j=0; j<= (this.vectors[i].length-1); j++){
        //console.log(i + " ||| " + j);
        stroke(255);
        line(i * spacing, j * spacing, i*spacing +
          this.vectors[i][j].x, j*spacing + this.vectors[i][j].y);
        //ellipse(i * spacing, j * spacing, 5);

      }
    }
  }

  this.getDirection = function(){

  }
}
