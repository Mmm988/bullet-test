var wall,thickness;
var bullet,weight,speed;

function setup() {
  createCanvas(800,400);
  wall=createSprite(700, 200, thickness,200);
  bullet=createSprite(100,200,30,20);
  bullet.shapeColor="white";
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet.velocityX=speed;
}

function draw() {
  background(0); 
  if(wall.x-bullet.x < bullet.width/2+wall.width/2){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}