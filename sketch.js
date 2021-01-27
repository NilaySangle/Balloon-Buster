var bow, arrow, green_balloon, red_balloon, pink_balloon, blue_balloon,arrowGroup,background,redB,greenB,blueB,score;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage, blue_balloonImage, backgroundImage;

var score;



function preload() {

    backgroundImage = loadImage("background0.png");

    arrowImage = loadImage("arrow0.png");
    bowImage = loadImage("bow0.png");
    red_balloonImage = loadImage("red_balloon0.png");
    green_balloonImage = loadImage("green_balloon0.png");
    pink_balloonImage = loadImage("pink_balloon0.png");
    blue_balloonImage = loadImage("blue_balloon0.png");

  }

function setup() {
    createCanvas(600, 600);

    //creating background
    background = createSprite(0, 0, 600, 600);
    background.addImage(backgroundImage);
    background.scale = 2.5

    // creating bow to shoot arrow
    bow = createSprite(480, 220, 20, 50);
    bow.addImage(bowImage);
    bow.scale = 1;

  score=0;
  redB = new Group();  
  greenB = new Group();  
  blueB= new Group();  
  redB= new Group();  
  pinkB= new Group();  
  arrowGroup = new Group();  



  }

function draw() {
    // moving ground
    background.velocityX = -3
  //  text("Score: "+ score, 500,50);

    if (background.x < 0) {
      background.x = background.width / 2;
    }

    //moving bow
    bow.y = World.mouseY

    // release arrow when space key is pressed
    if (keyDown("space")) {
       createArrow();
    }
    //this is to make the balloons spawn randomly
    var select_balloon = Math.round(random(1,4));
    console.log(select_balloon)

   if (World.frameCount % 80 == 0) {  
      if (select_balloon == 1) {
         red_balloon();
      } 
    else if (select_balloon == 2) {
        green_balloon();
      } else if (select_balloon == 3) {
        pink_balloon();
      } else {

        blue_balloon();
      }

    }
    //to destroy the red balloon and arrow if its touching each other
     if (arrowGroup.isTouching(redB)) {
    redB.destroyEach();
    arrowGroup.destroyEach();
      score=score+1;
  }



    //to destroy the green balloon and arrow if its touching each other
   if (arrowGroup.isTouching(greenB)) {
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score=score+2;
  }


    //to destroy the blue balloon and arrow if its touching each other
   if (arrowGroup.isTouching(blueB)) {
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
  }


    //to destroy the pink balloon and arrow if its touching each other
  if (arrowGroup.isTouching(pinkB)) {
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score=score+4;
  } 

      drawSprites();
  text("Score: "+ score, 500,50);

   }

function red_balloon() {

    var red = createSprite(0, Math.round(random(20, 370)), 10, 10);

    red.addImage(red_balloonImage);
    red.velocityX = 3;
    red.scale = 0.1;
    red.lifetime = 150;
    redB.add(red);
  }

function green_balloon() {

    var green = createSprite(0, Math.round(random(20, 370)), 10, 10);

    green.addImage(green_balloonImage);
    green.velocityX = 3;
    green.lifetime = 150;
    green.scale = 0.1;
    greenB.add(green);
  }

function blue_balloon() {

    var blue = createSprite(0, Math.round(random(20, 370)), 10, 10);

    blue.addImage(blue_balloonImage);
    blue.velocityX = 3;
    blue.lifetime = 150;
    blue.scale = 0.1;
    blueB.add(blue);
  }

function pink_balloon() {

    var pink = createSprite(0, Math.round(random(20, 370)), 10, 10);

    pink.addImage(pink_balloonImage);
    pink.velocityX = 3;
    pink.lifetime = 150;
    pink.scale = 1;
    pinkB.add(pink);
  }


  // Creating  arrows for bow
function createArrow() {
    arrow = createSprite(360, 100, 5, 10);
    arrow.addImage(arrowImage);
    arrow.x =360;
    arrow.y =bow.y;
    arrow.velocityX = -6;
    arrow.scale = 0.3;
    arrow.lifetime =100;
    arrowGroup.add(arrow);
    return arrow;

  }
