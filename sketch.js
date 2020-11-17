var wall, thickness;
var bullet;
var speed, weight;

function setup() {
  createCanvas(1600, 800);

  thickness=random(22, 83);
  speed=random(223, 321);
  weight=random(30, 52);

   //creating a bullet
   bullet = createSprite(200, 200, 10, 5);
   bullet.velocityX = speed

  //creating a wall
  wall = createSprite(1200, 200, thickness, height/2);

  //creating a bullet
  bullet = createSprite(200, 400, 10, 5);
  bullet.velocityX = speed

  //creating a wall
   wall = createSprite(1500, 400, thickness, height/2);

  //creating a bullet
   bullet = createSprite(200, 600, 10, 5);
   bullet.velocityX = speed

  //creating a wall
  wall = createSprite(1500, 600, thickness, height/2);
  

  
}


function draw() {
  background(255,255,255);

  textSize(25)
  Text("Bullet And Wall", 100, 700);

if(hasCollided(bullet, wall))
{
bullet.velocityX=0;
var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

if (damage>10)
{
  wall.shapeColor(255, 0, 0);
}


}

if(damage<10)
{
  wall.shapeColor(0, 255, 0);
}

 hasCollided();

  
  
  drawSprites();

}

function hasCollided(lbullet, lwall)
{
 bulletRightEdge = lbullet.x + lbullet.width;
 wallLeftEdge = lwall.x;
 if(bulletRightEdge>=wallLeftEdge)
 {
    return true
 }
    return false;

}