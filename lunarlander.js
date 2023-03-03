function setup() {
  createCanvas(600, 445);
  background(255, 255, 255);
}
const sentence = "START THE GAME";
let x = 400;
let y = 200;

function cloud() {
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
}
cloud();

function draw() {
  background(255, 255, 255);
  cloud();
}

function entry() {
  fill(240, 215, 0);
  textFont("Helvetica");
  textSize(25);
  text(sentence, x - 180, y - 20);
}

function draw() {
  background(255, 255, 255);
  cloud();
}
function sky() {
  fill(184, 215, 223);
  beginShape();
  vertex(-1, 443);
  bezierVertex(0, 443, 21, 357, 83, 362);
  bezierVertex(123, 314, 179, 317, 200, 360);
  bezierVertex(200, 360, 244, 338, 306, 333);
  bezierVertex(306, 333, 339, 333, 361, 350);
  bezierVertex(361, 350, 379, 337, 411, 325);
  bezierVertex(411, 325, 449, 310, 490, 343);
  bezierVertex(490, 343, 520, 160, 750, 491);
  endShape();
}
function draw() {
  background(255, 255, 255);
  sky();
}
function sun() {
  noStroke();
  fill(255, 255, 127);
  ellipse(10, 29, 250, 250);
}
function draw() {
  background(255, 255, 255);
  entry();
  sky();
}
function planet(x, y, h, w) {
  noStroke();
  fill(128, 128, 128);
  ellipse(x, y, h, w);
}
function draw() {
  background(255, 255, 255);
  cloud();
  entry();
  sky();
  sun();
  planet(524, 200, 100, 100);
}
function craters(_x, _y, _h, _w) {
  noStroke();
  fill(226, 224, 187);
  ellipse(_x, _y, _h, _w);
}
function draw() {
  sky();
  craters(548, 51, 10, 10);
  craters(556, 49, 4, 4);
  craters(605, 27, 3, 3);
  craters(607, 29, 1.5, 1.5);
  planet(140, 278, 100);
  planet(510, 151, 200, 200);
  planet(40, 50, 190, 190);
}
function ufo(x, y) {
  translate(x, y);
  push();
  strokeWeight(0.1);
  fill(23, 38, 90);
  ellipse(270, 271, 40, 20);
  fill(208, 240, 192);
  ellipse(270, 268, 100, 15);
  fill(255, 255, 197);
  ellipse(270, 268, 80, 9);
  noFill();
  strokeWeight(1);

  stroke(23, 38, 90);
  beginShape();
  vertex(243, 267);
  bezierVertex(243, 267, 250, 230, 279, 243);
  bezierVertex(279, 243, 292, 251, 298, 266);

  endShape();
  pop();
}
function draw() {
  sky();
  craters(548, 51, 10, 10);
  craters(556, 49, 4, 4);
  craters(605, 27, 3, 3);
  craters(607, 29, 1.5, 1.5);
  planet(140, 278, 100);
  planet(510, 151, 200, 200);
  planet(40, 50, 190, 190);
  ufo();
}

let ufoY = 445;

function draw() {
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
  ufo(100, ufoY);

  ufoY = ufoY - 2;
}

let ufoX = 600;
let velocity = 5;
let acceleration = 3.2;
