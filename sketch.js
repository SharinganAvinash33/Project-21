var bullet,wall,speed,weight,damage,bulletRightEdge,wallLeftEdge;
function setup() {

  //creating the canvas
  createCanvas(1600,400);

  //creating the bullet and the wall at opposite sides
  thickness=random(22,83);

  bullet=createSprite(100, 200, 50, 20);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="80,80,80";

  //speed and weight are set ot random
  speed=Math.round(random(223,321));
  weight=Math.round(random(30,52));
  bullet.velocityX=speed;
  bullet.shapeColor="white";

  
}

function draw() {

  //black background
  background(0);  

  //code for detection and identification of collision
  if(collided(bullet,wall)){
    bullet.velocityX=0;
    damage=((0.5*weight*speed*speed)/(thickness*thickness*thickness));   
    
    if(damage<10){
      wall.shapeColor="green";
    }
    if(damage>10){
      wall.shapeColor="red";
    }
    
  }
  else{
    wall.shapeColor=color(80,80,80);
    bullet.shapeColor="white";
  }

  //drawing the sprites
  drawSprites();
}

function collided(bullet,wall){

    
    bulletRightEdge=bullet.x+bullet.width/2;
    wallLeftEdge=wall.x-thickness/2;
    if(bulletRightEdge>=wallLeftEdge){
      return true;
    }
    else{
      return false;
    }

}