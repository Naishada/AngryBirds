
// namespacing
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world
var ground;
var box1,box2,box3,box4;
var pig1,pig2,pig3;
var log1,log2,log3,log4;
var bird;
var bg;
//restitution

function preload(){
   bg = loadImage("sprites/bg.png");  
}

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world

  box1 = new Box(700,350,60,60);
  box2 = new Box(500,350,60,60);
  box3 = new Box(700,280,60,60);
  box4 = new Box(500,280,60,60);
  ground = new Ground(600,390,1200,20);
  pig1 = new Pig(600,350);
  pig2 = new Pig(600,280);
  pig3 = new Pig(600,220);
  log1 = new Log(600,320,300,PI/2);
  log2 = new Log(600,250,300,PI/2);
  log3 = new Log(550,180,150,PI/4);
  log4 = new Log(650,180,150,-PI/4);
  bird = new Bird(100,100);
  // PI radians = 180 degrees
}

function draw() {
  background(bg); 
  Engine.update(engine) 

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  ground.display();
  pig1.display();
  pig2.display();
  pig3.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  bird.display();
  drawSprites();
}