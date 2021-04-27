const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
//const Render=Matter.Render;
//const Body=Matter.Body;

const name="aishwary"



var engine,world
var box,ground

function setup() {
  createCanvas(1800,1000);
  engine=Engine.create();
  world=engine.world;
  console.log(name);
  
  var options={
    restitution:4,
    density:1,
    friction:2
  }

  box=Bodies.circle(1200,200,30,options);
  World.add(world,box);

  var option={
    isStatic:true
  }
  ground=Bodies.rectangle(900,980,1800,20,option);
  World.add(world,ground);
}

function draw() {
  background(0);
  textSize(20)
  fill("red")
  text(mouseX+","+mouseY,mouseX,mouseY);  
  Engine.update(engine);
  drawSprites();
  ellipseMode(CENTER);
  ellipse(box.position.x,box.position.y,100)
 // rectMode(CENTER)
  rect(ground.position.x,ground.position.y,1800,20) 


}