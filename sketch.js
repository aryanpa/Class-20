var fixRect,moveRect;

function setup() {
  createCanvas(800,400);
  fixRect = createSprite(400, 200, 50, 80);
  fixRect.shapeColor = "green"

  moveRect = createSprite(400, 200, 80, 30);
  moveRect.shapeColor = "green"

}

function draw() {
  background(0);  

  moveRect.x = mouseX 
  moveRect.y = mouseY

  if(moveRect.x-fixRect.x <=moveRect.width/2+fixRect.width/2 &&
    fixRect.x-moveRect.x <=moveRect.width/2+fixRect.width/2 &&
    moveRect.y-fixRect.y <=moveRect.height/2+fixRect.height/2 &&
    fixRect.y-moveRect.y <=moveRect.height/2+fixRect.height/2){
      
    fixRect.shapeColor = "red";
    moveRect.shapeColor = "red";
  }else {
    fixRect.shapeColor = "green";
    moveRect.shapeColor = "green";

  }



  drawSprites();

  


}