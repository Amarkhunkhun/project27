
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


var circle1,circle2,circle3,circle4,circle5
var string1,string2,string3,string4,string5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	circle1 = new Circle (200,200,20);
	circle2 = new Circle (240,200,20);
	circle3 = new Circle (280,200,20);
	circle4 = new Circle (320,200,20);
	circle5 = new Circle (360,200,20);

	string1 = new String (circle1.body,{x:200,y:100})
	string2 = new String (circle2.body,{x:240,y:100})
	string3 = new String (circle3.body,{x:280,y:100})
	string4 = new String (circle4.body,{x:320,y:100})
	string5 = new String (circle5.body,{x:360,y:100})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(60);
  
  drawSprites();

  circle1.display();
  circle2.display();
  circle3.display();
  circle4.display();
  circle5.display();

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

  console.log (circle1.body);
 
  
  rect(280,100,250,20);
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(circle1.body,circle1.body.position,{x:-5, y:-5})


	}



}



