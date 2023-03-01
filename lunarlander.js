background(255, 255, 255);

function ufo() {
  //helmet//
  strokeWeight(0.8);
  fill(255, 255, 197);
  beginShape();
  vertex(240, 180);
  bezierVertex(240, 180, 260, 182, 310, 180);
  bezierVertex(310, 165, 299, 150, 283, 141);
  bezierVertex(288, 142, 246, 143, 236, 180);
  endShape();

  //small point on the top
  line(281, 141, 270, 108);
  fill(23, 38, 90);
  ellipse(270, 107, 7, 7);

  //main//
  fill(208, 240, 192);
  beginShape();
  vertex(242, 167);
  bezierVertex(242, 167, 199, 165, 190, 195);
  bezierVertex(190, 195, 185, 210, 279, 210);
  bezierVertex(279, 210, 316, 210, 326, 210);
  bezierVertex(326, 210, 380, 210, 332, 172);
  bezierVertex(332, 172, 320, 160, 227, 167);
  endShape();

  //lower part

  fill(208, 240, 192);
  beginShape();
  vertex(189, 196);
  bezierVertex(189, 196, 188, 202, 201, 207);
  bezierVertex(201, 207, 207, 211, 219, 214);
  bezierVertex(219, 214, 231, 215, 245, 215);
  bezierVertex(245, 215, 282, 216, 304, 216);
  bezierVertex(304, 216, 318, 216, 326, 215);
  bezierVertex(326, 215, 343, 212, 349, 204);
  endShape();

  //the lowest part
  fill(23, 38, 90);
  beginShape();
  vertex(230, 214);
  bezierVertex(230, 216, 241, 224, 267, 227);
  bezierVertex(267, 227, 283, 227, 299, 216);
  endShape();
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
ufo();
sky();
/* нажата кнопка
function mousePressed() {
  console.log("hi");
}

function mouseReleased() {
  console.log("bye");
}

function mouseClicked() {
  console.log("ur done");
}
*/

/*
function multiply(a, b) {
  const result = a * b;
  return result;
}

console.log(multiply(8, 9));
*/

/* літає по горизонталі
let x = 100;
function draw() {
  clear();
  planet(x + 20, 160, 150, 150);
  x = x + 1;
}
*/
