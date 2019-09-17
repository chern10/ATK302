function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 800);//the size of background
}

function draw() {
  background('blue'); /* IE6-9 */

  noStroke();

  fill('orange');
  ellipse(124, 140, 72, 72);

  fill('brown');
  rect(349, 331, 63, 160);
  fill('Green');
  arc(379, 333, 280, 280, PI, TWO_PI);

fill('#FFE665');
  push();
    translate(width * .2, height * .2);
    rotate(frameCount / 50.0);
    star(0, 0, 80, 100, 40);
    pop();

    function star(x, y, radius1, radius2, npoints) {
      let angle = TWO_PI / npoints;
      let halfAngle = angle / 2.0;
      beginShape();
      for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius2;
        let sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a + halfAngle) * radius1;
        sy = y + sin(a + halfAngle) * radius1;
        vertex(sx, sy);
      }
      endShape(CLOSE);
    }


  // fill(204);
  // triangle(18, 18, 18, 360, 81, 360);
  //
  // fill(102);
  // rect(81, 81, 63, 63);
  //
  // fill(204);
  // quad(189, 18, 216, 18, 216, 360, 144, 360);
  //
  // fill(255);
  // ellipse(252, 144, 72, 72);
  //
  // fill(204);
  // triangle(288, 18, 351, 360, 288, 360);
  //


  fill(255);
  text(mouseX + ',' + mouseY,30,30);
}

function mouseReleased (){
  console.log(mouseX + ',' + mouseY);
}
