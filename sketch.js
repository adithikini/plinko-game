const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight=300;
var backgroundImg;


function preload() {
  backgroundImg = loadImage("bg img.jpg");
  
}

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
 

  ground = new Ground(240, 785, 480, 30);

  

 
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  for(var k=0; k<=width; k=k+80){
    division.push(new division(k,height-divisionHeight/2,10,divisionHeight));
  
    
  if (frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-20, width/2+20), 10, 10));
  }

  ground.display();
  
  
  background(backgroundImg);
  

  drawSprites();
}

}
for (var k = 0; k < particles.length; k++){
  particles[k].display();
}


for (var i = 0; i < divisions.length; i++){
  divisions[i].display();
}
for (var i = 0; i <= width; i = i + 80){
  divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
}


for (var j = 0; j < plinkos.length; j++){
  plinkos[j].display();
}

for (var j = 40; j <= width; j = j + 50){
  plinkos.push(new Plinko(j, 75));
}

for (var j = 15; j <= width - 10; j = j + 50){
  plinkos.push(new Plinko(j, 175));
}

for (var j = 40; j <= width; j = j + 50){
  plinkos.push(new Plinko(j,275));
}

for (var j = 15; j <= width - 10; j = j + 50){
  plinkos.push(new Plinko(j, 375));
}