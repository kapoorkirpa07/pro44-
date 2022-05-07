
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var rulesimg;

function preload(){

}


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

rulesimg = createImg ("RULES.jpg");
rulesimg.position(100,100);
rulesimg.size(800,800);

}




function draw() {
  background("white");  
  drawSprites();
}