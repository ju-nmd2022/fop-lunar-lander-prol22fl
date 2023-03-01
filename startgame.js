background(255, 255, 255);
let x = 400;
let y = 200;
const sentence = "START THE GAME";
//cloud//
function cloud(x, y) {
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

function draw() {
  function planet(x, y, h, w) {
    fill(128, 128, 128);
    ellipse(x, y, h, w);
  }

  planet(100, 263, 100);
  planet(510, 151, 200, 200);
  planet(40, 50, 190, 190);
  cloud(400, 200);

  //text
  fill(240, 215, 0);
  textFont("Helvetica");
  textSize(15);
  text(sentence, x - 145, y - 25);
}
