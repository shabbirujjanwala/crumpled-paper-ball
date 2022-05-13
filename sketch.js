
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let ground;
let leftSide;
let rightside;
var ball;
var radius = 40;
var world,engine;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/ 2, 670, width, 20);
	leftSide = new Ground(1100, 600, 20, 120);
	rightside = new Ground(1350, 600, 20, 120);
	
	

	//Create the Bodies Here.
	let ball_option = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}
	ball=Bodies.circle(260,100,radius/2,ball_option);
	World.add(world,ball);
	 rectMode(CENTER);
	 ellipseMode(RADIUS);
   Engine.run(engine);

	
	
	
}


function draw() {
	
	rectMode(CENTER);
	background(0);
	Engine.update(engine);

	ellipse(ball.position.x,ball.position.y,radius,radius);
	ground.show();
	leftSide.show();
	rightside.show();
	

}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position, { x: 85, y: -85 });

	}
}
