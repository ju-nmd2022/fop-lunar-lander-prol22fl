function setup() {
  createCanvas(800, 800);
}
let isGameActive = true;
let state = "start";
let velocity = 0.05;
let acceleration = 0.01;
let x = 100;
let y = 100;

//variables are done with the help of Klara Swiecicka
let ufoX = 100;
let ufoY = -100;

function ufo(ufoX, ufoY) {
  push();
  //lower part of the ufo
  strokeWeight(0.1);
  fill(23, 38, 90);
  ellipse(ufoX + 170, ufoY + 171, 40, 20);
  //wider part of the ufo
  fill(208, 240, 192);
  ellipse(ufoX + 170, ufoY + 168, 100, 15);
  //middle part of the ufo
  fill(255, 255, 197);
  ellipse(ufoX + 170, ufoY + 168, 80, 9);
  //upper part of the ufo
  fill(208, 240, 192);
  strokeWeight(0.2);
  stroke(23, 38, 90);
  ellipse(ufoX + 170, ufoY + 160, 45, 15);
  endShape();
  pop();
}

function startScreen() {
  background(255, 255, 255);
  function startButton() {
    let x = 400;
    let y = 200;
    push();
    //cloud
    fill(137, 207, 240);
    noStroke();
    beginShape();
    vertex(170, 160);
    bezierVertex(x - 230, y - 40, x - 213, y - 77, x - 186, y - 58);
    bezierVertex(x - 186, y - 58, x - 146, y - 82, x - 117, y - 50);
    bezierVertex(x - 117, y - 50, x - 80, y - 69, x - 57, y - 50);
    bezierVertex(x - 57, y - 50, x - 26, y - 66, x - 3, y - 53);
    bezierVertex(x - 3, y - 43, x + 25, y - 67, x + 62, y - 64);
    bezierVertex(x + 63, y - 64, x + 79, y - 53, x + 77, y - 29);
    bezierVertex(x + 77, y - 29, x + 87, y - 13, x + 77, y - 29);
    bezierVertex(x + 77, y - 29, x + 85, y - 12, x + 58, y + 1);
    bezierVertex(x + 58, y + 1, x + 6, y + 3, x - 17, y - 10);
    bezierVertex(x - 17, y - 10, x - 41, y + 5, x - 87, y - 11);
    bezierVertex(x - 87, y - 11, x - 135, y + 5, x - 161, y - 4);
    bezierVertex(x - 161, y - 14, x - 205, y - 6, x - 221, y - 23);
    bezierVertex(x - 221, y - 23, x - 229, y - 32, x - 230, y - 40);
    endShape();

    // reference is taken from p5.js
    fill(240, 215, 0);
    textFont("Helvetica");
    textSize(20);
    text("Click to start the game", x - 170, y - 20);
    text("THE GOAL IS TO LAND UFO ON THE LEFT PLANET", x - 300, y - 100);
    pop();
  }
  startButton(134, 56);
}

//reference is taken from exercise video "create a button"
function mouseClicked() {
  console.log("Button was clicked");
}

function gameScreen() {
  function sky() {
    noStroke();
    fill(184, 215, 223);
    beginShape();
    vertex(-1, 800);
    bezierVertex(10, 800, -71, 357, 83, 362);
    bezierVertex(123, 314, 179, 317, 200, 360);
    bezierVertex(200, 360, 244, 338, 306, 333);
    bezierVertex(306, 333, 339, 333, 361, 350);
    bezierVertex(361, 350, 379, 337, 411, 325);
    bezierVertex(411, 325, 449, 310, 490, 343);
    bezierVertex(590, 343, 720, 300, 750, 800);
    endShape();
  }

  function craters(_x, _y, _h, _w) {
    noStroke();
    fill(226, 224, 187);
    ellipse(_x, _y, _h, _w);
  }

  function planet(x, y, h, w) {
    noStroke();
    fill(128, 128, 128);
    ellipse(x, y, h, w);
  }

  background(255, 255, 255);
  sky();
  planet(140, 278, 100);
  planet(510, 151, 200, 200);
  planet(40, 50, 190, 190);
  craters(110, 33, 30, 30);
  craters(112, 59, 12, 12);
  craters(100, 285, 13, 13);
  craters(102, 297, 6, 6);
  craters(561, 109, 20, 20);
  craters(567, 125, 8, 8);
  craters(466, 230, 10, 10);
}

function resultScreen() {
  background(209, 237, 242);
  restartButton(100, 100, 200, 60);
  fill(0, 0, 0);
  textFont("Helvetica");
  textSize(20);
  text("hushgsg");
}

function restartButton() {
  let x = 400;
  let y = 200;
  push();
  //cloud (background of the text)
  fill(255, 255, 255);
  noStroke();
  beginShape();
  vertex(170, 160);
  bezierVertex(x - 230, y - 40, x - 213, y - 77, x - 186, y - 58);
  bezierVertex(x - 186, y - 58, x - 146, y - 82, x - 117, y - 50);
  bezierVertex(x - 117, y - 50, x - 80, y - 69, x - 57, y - 50);
  bezierVertex(x - 57, y - 50, x - 26, y - 66, x - 3, y - 53);
  bezierVertex(x - 3, y - 43, x + 25, y - 67, x + 62, y - 64);
  bezierVertex(x + 63, y - 64, x + 79, y - 53, x + 77, y - 29);
  bezierVertex(x + 77, y - 29, x + 87, y - 13, x + 77, y - 29);
  bezierVertex(x + 77, y - 29, x + 85, y - 12, x + 58, y + 1);
  bezierVertex(x + 58, y + 1, x + 6, y + 3, x - 17, y - 10);
  bezierVertex(x - 17, y - 10, x - 41, y + 5, x - 87, y - 11);
  bezierVertex(x - 87, y - 11, x - 135, y + 5, x - 161, y - 4);
  bezierVertex(x - 161, y - 14, x - 205, y - 6, x - 221, y - 23);
  bezierVertex(x - 221, y - 23, x - 229, y - 32, x - 230, y - 40);
  endShape();
  fill(240, 215, 0);
  textFont("Helvetica");
  textSize(25);
  text("Click to play again ", x - 185, y - 20);
  pop();
}

function mouseClicked() {
  console.log("Button was clicked");
}

//replacement of creens
//reference from exercise video 11"conditions and conditionals statemnets"
state = "start";
function draw() {
  if (state === "start") {
    startScreen();
  }
  if (state === "game") {
    gameScreen();
    ufo(ufoX, ufoY);

    if (isGameActive) {
      ufoY = ufoY + velocity;
      velocity = velocity + acceleration;

      //placement of ufo in the air
      //reference is taken from exercise video 12 "keyboard input"
      if (ufoY > 180) {
        isGameActive = false;
      }
      if (keyIsDown(38)) {
        velocity = velocity - 0.1;
      }
    }
  }
  if (keyIsDown(37)) {
    ufoX = ufoX - 1;
  }
  //ne nuzhna//
  if (keyIsDown(39)) {
    ufoX = ufoX + 1;
  }
  if (ufoX === -40 || ufoY > 180) {
    state = "result";
  }
  if (state === "result") {
    resultScreen();
  }
}

//functionality of buttons
function mousePressed() {
  if (state === "start") {
    state = "game";
    ufoX = 100;
    ufoY = -100;
  }
  //result button for a failed ending
  if (state === "result") {
    state = "game";
    ufoX = 100;
    ufoY = -100;
    acceleration = 0.01;
    velocity = 0.01;
    isGameActive = true;
  }
}
