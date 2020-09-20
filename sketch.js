var bullet1,bullet2,bullet3,bullet4,wall1,wall2,wall3;
var bullet1Img,bullet2Img,bullet3Img,bullet4Img;
var speed,weight,thickness;
var crashingbullet1,crashingbullet2,crashingbullet3,crashingbullet4;
var result1,result2,result3,result4;
var bulletRightEdge,wallLeftEdge;
function preload()
{
   bullet1Img=loadImage("bullet.png");
   bullet2Img=loadImage("bullet.png");
   bullet3Img=loadImage("bullet.png");
   bullet4Img=loadImage("bullet.png");
}

function setup()
{
   createCanvas(1600,560);
   
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  
  result1=createSprite(800,50,1600,80);
  result1.shapeColor="blue";

  result2=createSprite(800,200,1600,80);
  result2.shapeColor="blue";

  result3=createSprite(800,350,1600,80);
  result3.shapeColor="blue";

  result4=createSprite(800,500,1600,80);
  result4.shapeColor="blue";

  bullet1=createSprite(70,50,50,50);
  bullet1.addImage(bullet1Img);
  bullet1.scale=0.2;
  bullet1.velocityX=speed;

  bullet2=createSprite(70,200,50,50);
  bullet2.addImage(bullet2Img);
  bullet2.scale=0.2;
  bullet2.velocityX=speed

  bullet3=createSprite(70,350,50,50);
  bullet3.addImage(bullet3Img);
  bullet3.scale=0.2;
  bullet3.velocityX=speed;

  bullet4=createSprite(70,500,50,50);
  bullet4.addImage(bullet4Img);
  bullet4.scale=0.2;
  bullet4.velocityX=speed;
    
  wall1=createSprite(800,125,1600,5);
  wall1.shapeColor="white";

  wall2=createSprite(800,275,1600,5);
  wall2.shapeColor="white";

  wall3=createSprite(800,425,1600,5);
  wall3.shapeColor="white";

  crashingbullet1=createSprite(1500,60,thickness,70);
  crashingbullet1.shapeColor="orange";

  crashingbullet2=createSprite(1500,200,thickness,70);
  crashingbullet2.shapeColor="orange";

  crashingbullet3=createSprite(1500,340,thickness,70);
  crashingbullet3.shapeColor="orange";
  
  crashingbullet4=createSprite(1500,500,thickness,70);
  crashingbullet4.shapeColor="orange";
}

function draw() 
{
  background(0,0,0);
 
if(hasCollided(bullet1,crashingbullet1))
{
   bullet1.velocityX=0;
   bullet2.velocityX=0;
   bullet3.velocityX=0;
   bullet4.velocityX=0;
   var damage;
   damage = 0.5 * weight * speed * speed /( thickness * thickness * thickness )
   
  if(damage > 10)
   {
      result1.shapeColor=color(255,0,0);
      result2.shapeColor=color(255,0,0);
      result3.shapeColor=color(255,0,0);
      result4.shapeColor=color(255,0,0);

   }

   if(damage < 10)
   {
      result1.shapeColor=color(0,255,0);
      result2.shapeColor=color(0,255,0);
      result3.shapeColor=color(0,255,0);
      result4.shapeColor=color(0,255,0);
   }

}  

  drawSprites();
}

function hasCollided(lbullet,lwall)
{
   bulletRightEdge=lbullet.x+lbullet.width;
   wallLeftEdge=lwall.x;
   if(bulletRightEdge>=wallLeftEdge)
   {
     return true;
   }
   else
   {
      return false;
   } 
}