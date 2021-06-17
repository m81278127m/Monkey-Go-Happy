var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score = 0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {

 createCanvas(800,400); 
  
  monkey=createSprite(100,340,20,50);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  ground.visible =false;

  foodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {

background(255);
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
    if(keyDown("space")){
      
      monkey.velocityY = -12;
    }
    monkey.velocityY=monkey.velocityY+0.8;
    monkey.collide(ground);
    
  food();
  spawnObstacle();
  
    drawSprites();

  textSize(20);
  fill("orange");
  text("score : "+score,500,50);
  
}

function food() {
  if (frameCount % 80 == 0) {
    banana = createSprite(600,250,40,10);
    banana.addImage(bananaImage);
    banana.velocityX =-5;
    banana.scale =0.05;
    banana.y = Math.round(random(200,250));
    banana.lifetime = 300;
    foodGroup.add(banana);
  }
}

function spawnObstacle() {
  if(frameCount % 300 ==0) {
    obstacle = createSprite(800,350,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -6;
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
  }
}





