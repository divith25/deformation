var car1,car2,car3,wall1,wall2,wall3,wall4,stopper1,stopper,stopper3,spped2,spped1
var speed1,weight,deformation
function setup() {
  createCanvas(1000,1000);
 car1= createSprite(400, 200, 10, 10);
 car2= createSprite(400, 150, 10, 10);
 car3= createSprite(400, 100, 10, 10);
speed1=Math.round(random(55,90))
speed2=Math.round(random(55,90))
speed3=Math.round(random(55,90))
weight=Math.round(random(400,1500))
wall1=createSprite(600,175,500,10)
wall2=createSprite(600,125,500,10)
wall3=createSprite(600,75,500,10)
wall4=createSprite(600,225,500,10)
stopper1=createSprite(800,200,40,40)
stopper2=createSprite(800,150,40,40)
stopper3=createSprite(800,100,40,40)



car1.velocityX=speed1;
car1.weight
 car2.velocityX=speed2;
car2.weight
 car3.velocityX=speed3;
car3.weight
console.log(car1.velocityX)
}

function draw() {
  background(800,800,800);  

 
if(car1.collide(stopper1)){

  car1.velocityX=0;
  var deformation=0.5 * weight * speed1* speed1/22500;
if(deformation>180)
{
  car1.shapeColor=color(255,0,0);
}

if(deformation<180 && deformation>100)
{
  car1.shapeColor=color(230,230,0);
}

if(deformation<100)
{
  car1.shapeColor=color(0,255,0);
}
}
 
if(car2.collide(stopper2))
{
  
  var deformation=0.5 * weight * speed2* speed2/22500;
if(deformation>180)
{
  car2.shapeColor=color(255,0,0);
}

if(deformation<180 && deformation>100)
{
  car2.shapeColor=color(230,230,0);
}

if(deformation<100)
{
  car2.shapeColor=color(0,255,0);
}
}
 
if(car3.collide(stopper3)){

  
  var deformation=0.5 * weight * speed3* speed3/22500;
if(deformation>180)
{
  car3.shapeColor=color(255,0,0);
}

if(deformation<180 && deformation>100)
{
  car3.shapeColor=color(230,230,0);
}

if(deformation<100)
{
  car3.shapeColor=color(0,255,0);
}
}
 
  drawSprites();
}