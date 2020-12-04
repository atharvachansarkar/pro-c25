const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var paper,dustbin1,dustbin2,dustbin3
var paper,paperBody

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500)
	engine = Engine.create()
	world = engine.world

	//Create the Bodies Here.
	ground=new Ground(width/2,height-50,1200,15)

	dustbin=new Dustbin(width-168,height-135,120,150)

	paper=new Paper(100,height-185,48,40)

	Engine.run(engine)
  
}


function draw() {
  rectMode(CENTER)
  background(255)

  keyPressed()
  drawSprites()
  
  fill(0)
  stroke(500)
  text("PRESS UP_ARROW TO MOVE THE PAPER",50,100)
  text("AND ANY OTHER KEY TO MOVE IT DOWN TOWARDS THE DUSTBIN",50,130)
  
  ground.display()
  dustbin.display()
  paper.display()
  
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:3,y:-7})
	}else{

  }
}