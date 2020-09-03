var tower,towerImage;
var ghost,ghostImg;
var climbers,doors,invisibleblock,climbersGroup,doorGroup,invisibleblock;
var climberImg,doorImg;
var gameState="play";

function preload(){
  towerImage=loadImage("tower.png");
  climberImg=loadImage("climber.png");
  ghostImg=loadImage("ghost-standing.png");
  doorImg=loadImage("door.png");
  
}

function setup(){
  createCanvas(600,600);
  
  tower=createSprite(300,300);
  tower.addImage(towerImage);
  tower.velocityY=1;
  
  ghost=createSprite(300,300);
  ghost.addImage(ghostImg);
  ghost.scale=0.3;
  
  climbersGroup=new Group();
  doorGroup=new Group();
  
}
function draw(){
  background(0);
  if(gameState=="play"){
    if(tower.y>400){
    
    tower.y=300;
  }
  if(keyDown("left")){
     ghost.x=ghost.x-3
  }
  if(keyDown("right")){
     ghost.x=ghost.x+3
  }
  if(keyDown("up")){
     ghost.y=ghost.y-3
  }
  if(keyDown("down")){
     ghost.y=ghost.y+3
  }
  
  if(ghost.isTouching(climbersGroup)){
    gameState="end";
    
    
  }
  spawndoors();
  
  
    
    
  }
 if(gameState=="end"){
   ghost.visible=false;
   tower.visible=false;
   climbersGroup.destroyEach();
   doorGroup.destroyEach();
   stroke("white");
   fill("white")
   textSize(40);
   text("Game Over",250,300);
 }
  
  
  
  
  
  
  drawSprites();
}

function spawndoors(){
if (frameCount%240==0){
  door=createSprite(200,-50);
  door.addImage(doorImg);
  door.x=Math.round(random(120,400));
  climber=createSprite(200,10);
  climber.addImage(climberImg);
  climber.x=door.x;
  door.velocityY=1;
  climber.velocityY=1;
  
  ghost.depth=door.depth;
  ghost.depth=ghost.depth+1;
  climbersGroup.add(climber);
  doorGroup.add(door);
}
  
  
}