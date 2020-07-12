var playerPaddle, computerPaddle,rect1,rect2;

function setup() {
  createCanvas(800,400);
  playerPaddle = createSprite(400, 200, 40, 50);
  computerPaddle = createSprite(100,100,20,40)
  computerPaddle.shapeColor = "green";
  rect1 = createSprite(100,100,50,50);
  rect2 = createSprite(700,100,20,40);
  rect1.velocityX = 3;
  rect2.velocityX = -3;
}


function draw() {
  background(0);  
  computerPaddle.x = World.mouseX;
  computerPaddle.y = World.mouseY;

  if(isTouching(computerPaddle , playerPaddle)){
    computerPaddle.shapeColor = "red";
    playerPaddle.shapeColor = "white";
  }
  else{
    computerPaddle.shapeColor = "green";
    playerPaddle.shapeColor = "blue";
  }

  bounceOff(rect1,rect2);



  drawSprites();
}
function bounceOff(ob1 , ob2){
  if((ob2.x - ob1.x < ob2.width/2 + ob1.width/2) && 
  (ob1.x - ob2.x < ob2.width/2 + ob1.width/2)){
    ob2.velocityX = ob2.velocityX *(-1);
    ob1.velocityX = ob1.velocityX *(-1);
  }

  if((ob1.x > 800)||(ob1.x < 0)||(ob2.x > 800)||(ob2.x < 0)){
    ob1.velocityX = ob1.velocityX *(-1);
    ob2.velocityX = ob2.velocityX *(-1);
  }
  }
  function isTouching(ob1 , ob2){
    if((ob2.x - ob1.x < ob2.width/2 + ob1.width/2) && 
    (ob1.x - ob2.x < ob2.width/2 + ob1.width/2) &&
    (ob2.y - ob1.y < ob2.height/2 + ob1.height/2) &&
    (ob1.y - ob2.y < ob2.height/2 + ob1.height/2)){
      return true;
    }
    else{
      return false;
    }
  }
