const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, stage1, stage2, ball, slingshot, polygonImg;
var block1, block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var block17,block18,block19,block20,block21,block22,block23,block24,block25;

function preload(){
  polygonImg = loadImage("Images/polygon.png");
}

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
	world = engine.world;
  
  ground = new Ground(400,790,800,10);
  stage1 = new Ground(350,650,240,10);
  stage2 = new Ground(550,400,200,10);

  block1 = new Box(350,610,30,40);
  block2 = new Box(380,610,30,40);
  block3 = new Box(410,610,30,40);
  block4 = new Box(440,610,30,40);
  block5 = new Box(320,610,30,40);
  block6 = new Box(290,610,30,40);
  block7 = new Box(260,610,30,40);
  block8 = new Box(320,570,30,40);
  block9 = new Box(290,570,30,40);
  block10 = new Box(350,570,30,40);
  block11 = new Box(380,570,30,40);
  block12 = new Box(410,570,30,40);
  block13 = new Box(350,540,30,40);
  block14 = new Box(380,540,30,40);
  block15 = new Box(320,540,30,40);
  block16 = new Box(350,510,30,40);

  block17 = new Box(550,360,30,40);
  block18 = new Box(580,360,30,40);
  block19 = new Box(610,360,30,40);
  block20 = new Box(520,360,30,40);
  block21 = new Box(490,360,30,40);
  block22 = new Box(550,320,30,40);
  block23 = new Box(580,320,30,40);
  block24 = new Box(520,320,30,40);
  block25 = new Box(550,290,30,40);

  ball = new Ball(100,500); 
  slingshot = new SlingShot(ball.body,{x:100,y:500});
}

function draw() {
  background(0);  
  Engine.update(engine);
  
 ground.display();
 stage1.display();
 stage2.display();
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
 block16.display();
 block17.display();
 block18.display();
 block19.display();
 block20.display();
 block21.display();
 block22.display();
 block23.display();
 block24.display();
 block25.display();
 ball.display();
 slingshot.display();
 drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}
