var spaceCraft,iss,spaceCraftBack,spaceCraftLeft,spaceCraftRight;
var spaceCraft_img1,spaceCraft_back,spaceCraft_left,spaceCraft_right,iss_img;

var spaceBg;
var canvas;
var hasDocked = false;

function preload(){
  spaceBg = loadImage("images/spacebg.jpg");
  iss_img = loadImage("images/iss.png");
  spaceCraft_img1 = loadImage("images/spacecraft1.png");
  spaceCraft_back = loadImage("images/spacecraft2.png");
  spaceCraft_left = loadImage("images/spacecraft3.png");
  spaceCraft_right = loadImage("images/spacecraft4.png");
}

function setup() {
  canvas = createCanvas(1000,600);
  spaceCraft = createSprite(472 ,561,50,50);
  spaceCraft.addImage(spaceCraft_img1);
  spaceCraft.scale=0.3;

  iss = createSprite(450,250, 50, 50);
  iss.addImage(iss_img);
  
 
}

function draw() {
  background(spaceBg);  

  if(!hasDocked){
   keyPressed();
   if(spaceCraft.y <= (iss.y+100) && spaceCraft.x <= (iss.x-10)){ 
     hasDocked = true;
    // console.log(spaceCraft.x);
     //console.log(spaceCraft.y);
      textSize(25);
       fill("white") ;
       text("Docking Successful!", 500, 300);
      }
  }
  
   drawSprites();
  //console.log(mouseX,mouseY);
}

function keyPressed(){
  
  if(keyDown(RIGHT_ARROW)){
    spaceCraft.x = spaceCraft.x+4
    spaceCraft.addImage(spaceCraft_right)
  }
  if(keyDown(LEFT_ARROW)){
    spaceCraft.x = spaceCraft.x-4
    spaceCraft.addImage(spaceCraft_left)

  }
  if(keyDown(UP_ARROW)){
    spaceCraft.y = spaceCraft.y-4
    spaceCraft.addImage(spaceCraft_img1);

  }
  if(keyDown(DOWN_ARROW)){
    spaceCraft.addImage(spaceCraft_back);
  }
}

