var WIDTH = 600;
var HEIGHT = 600;
var ps;
var ps1;
var w;
var vf;
var position;

function setup() {
	//createCanvas(windowWidth, windowHeight);
	createCanvas(WIDTH, HEIGHT);
	background(0);
	ps = new ParticleSystem(WIDTH/2, HEIGHT/2, 255, 100, 50);
	console.log(ps.color);
	ps1 = new ParticleSystem (WIDTH/4, HEIGHT/4, 30, 100, 150);

	vf = new Field(WIDTH, HEIGHT);
	vf.populate();
	for(var i = 0; i<100; i++){
		//ps.addParticle(new Particle(ps.x, ps.y));
		//ps1.addParticle(new Particle(ps1.x, ps1.y));
	}
	// w = new Wind(WIDTH - WIDTH/4, HEIGHT - HEIGHT/4,
	// 	createVector(-1, 0));

	//console.log("leaving setup");

	position = vf.nearestVector(260, 230);
}

function draw() {
	background(0);
	ps.x = mouseX;
	ps.y = mouseY;
	//ps.draw();
	ps1.draw();
	vf.debug();

	ellipse(position.x, position.y, 10);
	//w.debug();
	//console.log("particle count: " + (ps.pList.length + ps1.pList.length));
	// p1.display();
	// p1.move();
}
