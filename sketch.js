var heroImage , villanImage, carnage;
var hero,villan;
var backgroundImage;
var edges;
var fire,fireImage;
var bullet, bulletImage;
var begin=1;
var PLAY=2;
var END=0;
var gameState=begin;
var score=0;
var life=3;
var play,playImg;
var heroo,herooImage;

function preload(){

  backgroundImage= loadImage("./assets/space.jpg");
  heroImage= loadImage("./assets/hero1.png");
  villanImage= loadImage("./assets/villan1.1.png");
  fireImage= loadImage("./assets/villanFire1.png");
  bulletImage= loadImage("bullet2.png");
  herooImage= loadImage("heroo.png");
  playImg= loadImage("playy.png");

}

function setup(){


createCanvas(windowWidth,windowHeight);
bgImage=createSprite(200,200,2000,2000);
bgImage.addImage(backgroundImage);
bgImage.scale=2;


heroo=createSprite(displayWidth-1250,displayHeight-300,50,50);
heroo.addImage(herooImage);
heroo.scale=1;

  play=createSprite(displayWidth-200,displayHeight-300,50,50);
  play.addImage(playImg);


  villan=createSprite(displayWidth-200,displayHeight-300,50,50);
  villan.addImage(villanImage);
  villan.scale=0.4;
  villan.velocityY=4;
  
  villan.setCollider("rectangle",0,0,20,500)
  
  hero=createSprite(displayWidth-1250,displayHeight-300,50,50);
  hero.addImage(heroImage);
  hero.scale=0.15;



fireGroup= new Group();
bulletGroup= new Group();

}

function draw(){
background("white");

if(gameState===begin){


mainScreen();

}




if(gameState===PLAY){

  fight();

 

}


drawSprites();

textSize(20);
fill(255);
  
         text("Score: "+ score, 500,50);       


         textSize(20);
         fill(255);
           
                  text("life: "+ life, 420,50);  



}



//if(score>=5){

//gameState=3

//textSize(200);
//fill(255);
//text("YOU WIN");


//}

//if(life<=0){

//  gameState=3
  
//  textSize(200);
//  fill(255);
//  text("YOU LOSE");
  
  
//  }

function mainScreen(){

 hero.visible=false;
 villan.visible=false;

    if(mousePressedOver(play)){

      gameState=2

    }

}

function fight(){

  hero.visible=true;
  villan.visible=true;
 

  heroo.visible=false;
  play.visible=false;

 

  if(keyWentDown("space")){

    fire=createSprite(displayWidth-380,displayHeight-500,50,50);
    fire.addImage(fireImage);
    fire.scale=0.1;
    fire.velocityX=-10;
    fire.y=villan.y-80;
    fireGroup.add(fire);
    
    villan.depth=fire.depth;
    villan.depth+=1;
    }
    
    if(mousePressedOver(bgImage)){
    
      bullet=createSprite(displayWidth-1200,displayHeight-500,50,50);
      bullet.addImage(bulletImage);
      bullet.scale=0.3;
      bullet.velocityX=10;
      bullet.y=hero.y-130;
      bullet.x=hero.x+50;
      bulletGroup.add(bullet);
      
      hero.depth=bullet.depth;
      hero.depth+=1;
      }
    
      if(bulletGroup.isTouching(villan)){
    
       for(var i=0; i<bulletGroup.length;i++){
    
        if(bulletGroup[i].isTouching(villan)){
    
          score=score+1;
    
          bulletGroup.destroyEach();
    
    
        }
    
       }
    
      }
    
      if(fireGroup.isTouching(hero)){
    
        for(var i=0; i<fireGroup.length;i++){
     
         if(fireGroup[i].isTouching(hero)){
     
           life=life-1;
     
           fireGroup.destroyEach();
     
     
         }
     
        }
     
       }
      
    
    
    
    if (keyDown("w")){
    
    hero.y=hero.y-10;
    
    }
    
    if (keyDown("s")){
    
      hero.y=hero.y+10;
      
      }
    
      if (keyDown("a")){
    
        hero.x=hero.x-10;
        
        }
    
        if (keyDown("d")){
    
          hero.x=hero.x+10;
          
          }
    
    
    
    
    
       
           
    
    
    
  
  edges=createEdgeSprites();
villan.bounceOff(edges);

}




