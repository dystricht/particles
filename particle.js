var GRAVITY = 0.02;
var FRICTION;
function Particle(x = 0, y = 0) {

	this.pos = createVector(x, y);
	this.vel = createVector(0, 0);
	//this.acc = createVector(0, 0);
	this.acc = p5.Vector.random2D().mult(random(5));
	//this.acc = p5.Vector.random2D().mult(0.5);

	this.lifespan = 0;

	this.display = function() {
		//stroke(255);
		strokeWeight(4);
		point(this.pos.x, this.pos.y);
	},
	this.move = function() {
		this.pos.x = this.pos.x + random(-2, 2);
		this.pos.y = this.pos.y + random(-2, 2);
	}

	this.update = function() {

		var mouse = createVector(mouseX, mouseY);

		//mouse.sub(this.pos);
		//mouse.setMag(1);
		//this.acc = mouse;

		this.vel.add(this.acc);
		this.pos.add(this.vel);
		//this.vel.limit(6);
		this.acc.x = 0;
		this.acc.y = 0;

		this.lifespan++;

	}

	this.applyForce = function(force) {

		this.acc.add(force);
	}

	this.setFriction = function(val){

		FRICTION = val;
	}

	this.toDelete = function(){
		return (this.lifespan > 600);
	}
}
