var fixedRect,movingRect;
var rect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  rect = createSprite(600,300,50,50);
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else if (isTouching(movingRect,rect)){
    movingRect.shapeColor="yellow";
    rect.shapeColor="yellow";
  }
    else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
    rect.shapeColor = "green";
  }
  
  drawSprites();
}

