const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bgImage,hammer1,stone1,ground,rubber1,iron1;
var engine,world;

function setup() {
	  var canvas =createCanvas(900,550);
    engine = Engine.create();
	  world = engine.world;

  hammer1= new hammer(200,200,30,90);
  stone1= new stone(100,150,50,50);
  ground= new Ground(450,height,900,20);
  rubber1 = new Rubber(300,100,20);
  iron1 = new Iron(430,300,20,20);

  
}


function draw() {
  background("purple");
  Engine.update(engine);

  hammer1.display();
  stone1.display();
  ground.display();
  rubber1.display();
  iron1.display();
 
}



