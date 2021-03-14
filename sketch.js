const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
var myEngine,myWorld,ground;
var ball;

function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  var options = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,390,200,20,options);
  World.add(myWorld,ground);

  var ball_option = {
    restitution : 1
  }

  ball = Bodies.circle(200,100,20,ball_option);
  World.add(myWorld,ball);
 
 /*  var render = Render.create({
    element: document.body,
    engine: myEngine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	
	Engine.run(myEngine);
  Render.run(render); */

  //console.log(myObject);
  //console.log(myObject.type);
  //console.log(myObject.position.x);
  //console.log(myObject.position.y);
}

function draw() {
  background(0); 
  Engine.update(myEngine); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
 
}