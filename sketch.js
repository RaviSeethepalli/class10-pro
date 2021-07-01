var ship ,shipmoving;
var sea,seaimg
  

function preload(){
shipmoving=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaimg=loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,300,300)
  sea.scale=0.3
  sea.velocityX=-4
 sea.addImage(seaimg)
  ship=createSprite(200,250,5,5)
  ship.scale=0.2
  ship.addAnimation("moving",shipmoving)
}

function draw() {
  background("black");
  if(sea.x<0){
    sea.x=200
    sea.width/2
  }
 drawSprites()
}