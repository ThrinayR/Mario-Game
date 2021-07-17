
var mario, mario_running, mario_collided;
var ground
var bg;
var bgImage;
var obstacle1
var obstacle2
var obstacle3
function preload() {
  mario_running = loadAnimation("Capture1.png", "Capture3.png", "Capture4.png");
  mario_collided = loadAnimation("mariodead.png");
  bgImage = loadImage("backg.jpg");
  obstacle1 = loadImage("obstacle1.png")
  obstacle2 = loadImage("obstacle2.png")
  obstacle3 = loadImage("obstacle3.png")
var gamestate;
}

function setup() {
  createCanvas(800, 800);
  bg = createSprite(200,250)
  bg.addImage("bg", bgImage);
  bg.scale = 1.5;
  mario = createSprite(50, 505, 20, 50);
  mario.collide = ground;
  mario.addAnimation("running", mario_running);
  mario.scale = 0.5;
  ground = createSprite(800,550,1600,20);
  

}

function draw() {
background("white");
bg.velocityX = -10
if(bg.x<0)
{
 bg.x=bg.width/1.5;
} 
text(mouseX+","+mouseY,mouseX,mouseY);
spawnobstacles();







drawSprites();
}
function spawnobstacles()
{
  if(frameCount%60===0)
 {
  var obstacle = createSprite(900,505,20,20);
  var rand = random(1,3)
  
  
  switch(rand)
  {
    case 1: obstacle.addImage("obstacle1", obsctacle1 )
    break
    
    case 2: obstacle.addImage("obstacle2", obsctacle2)
    break
    
    case 3: obstacle.addImage("obstacle3", obsctacle3 )
    break
    
    default:
    break
  }

  obstacle.velocityX = -10
  
 }
}