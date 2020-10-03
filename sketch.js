
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, roof;
var rope1, rope2, rope3, rope4, rope5;

/*function preload()
{
	
}*/

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof (800, 200, 500, 35);
	bobObject1 = new Bob (660, 400, 70);
	bobObject2 = new Bob ((bobObject1.x) + 70, 400, 70);
	bobObject3 = new Bob ((bobObject2.x) + 70, 400, 70);
	bobObject4 = new Bob ((bobObject3.x) + 70, 400, 70);
	bobObject5 = new Bob ((bobObject4.x) + 70, 400, 70);

	rope1 = new Rope (bobObject1.body, roof.body, -70*2, 0);
	rope2 = new Rope (bobObject2.body, roof.body, -35*2, 0);
	rope3 = new Rope (bobObject3.body, roof.body, 0, 0);
	rope4 = new Rope (bobObject4.body, roof.body, 35*2, 0);
	rope5 = new Rope (bobObject5.body, roof.body, 70*2, 0);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
	drawSprites();

	roof.display();
	
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
}

function keyPressed () {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-50, y:-45});
	}
}

