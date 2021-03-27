var player,playerImg,bg,bgImg;
var score=0;
var npc1,npc1Img,npc2,npc2Img,npc3,npc3Img;
var invisibleGround;
function preload()
{
bgImg=loadImage("images/snow pic1.jpg");
playerImg=loadImage("images/character1-removebg-preview.png");
npc1Img=loadImage("images/s character boy.png");
npc2Img=loadImage("images/s character.png");
npc3Img=loadImage("images/s character girl.png");

}

function setup() {
  createCanvas(1300,600);
  bg=createSprite(650,300);
  bg.addImage("background",bgImg);
  bg.scale=1.8;
  bg.x=bg.width/2;
  bg.velocityX=-1.5;
  player=createSprite(300, 530, 50, 50);
  player.addImage("player",playerImg);
  player.scale=0.7;
  npc1=createSprite(1500,520,50,50);
  npc1.addImage("npc1",npc1Img);
  npc1.scale=0.7;
  npc1.velocityX=-5;
  npc2=createSprite(2000,530,50,50);
  npc2.addImage("npc2",npc2Img);
  npc2.velocityX=-5;
  npc3=createSprite(2500,530,50,50);
  npc3.addImage("npc3",npc3Img);
  npc3.velocityX=-5;
  invisibleGround=createSprite(0,630,2600,5);
  invisibleGround.visible=false;

}

function draw() {
  background("white");
  score=score+1;
  console.log(score);

  if (bg.x < 400){
    bg.x=bg.width/2;
  }

  if (keyDown("space")){
    player.velocityY=-10;
  }
  player.velocityY=player.velocityY+0.8;

  player.collide(invisibleGround);

  if(npc1.x<0){
    npc1.x=1500;
  }
  
  if(npc2.x<0){
    npc2.x=1500;
  }
  
  if(npc3.x<0){
    npc3.x=1500;
  }
  drawSprites();
//give text & color for SCORE
  textSize(30);
  fill("red");
  text("Score : "+score,1000,50);
}