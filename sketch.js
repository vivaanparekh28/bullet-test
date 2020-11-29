var bullet, wall;
var speed,weight,thicknes;
var damage;

function setup() {
  createCanvas(1600,400);
 thicknes=Math.round(random(20,85));
 wall=createSprite(1200,200,thicknes,200);
 bullet=createSprite(50, 200, 30, 10);
speed=Math.round(random(25,50))
weight=Math.round(random(2000,3000));
wall.shapeColor="grey"
bullet.shapeColor="white"
bullet.depth=bullet.depth+1;
wall.depth=bullet.depth+1;
}

function draw() {
  background(0);
  bullet.debug=false;
  wall.debug=false;

  

  bullet.velocityX=speed;
  bullet.weight=weight;
  if (bullethit())  {
    bullet.velocityX=0
     var damage=(0.5*weight*speed*speed)/(thicknes*thicknes*thicknes)
     if (damage>10){
       wall.shapeColor="red"
     }
     
     if (damage<10){
       wall.shapeColor="green"
     }

  }
  drawSprites();
}
function bullethit(){
  if (wall.x-bullet.x<=bullet.width/2+wall.width/2){
    return true;
  }
  else {
    return false;
  }
}