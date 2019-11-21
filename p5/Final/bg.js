var daysunpos=200;
var nightsunpos=200;

function nighttime() {
  background(159, 189, 237); // rgb  0-255

  // pretty sky
  for (var i = 0; i <= 500; i += 5) {
    strokeWeight(10);
    stroke(215 - i, 128 - i, 64);
    line(0, 350 - i, width, 350 - i); // x,y,x,y
  }

  // sun
  noStroke();
  fill(250, 186, 3);
  ellipse(700, nightsunpos = nightsunpos + .5, 70, 70);
//  1
  //text(frameCount,200,150);



  // cloud
  fill(255, 255, 255, 50);
  ellipse(frameCount / 4, 150, 40, 20);
  //cloud 2
  fill(255, 255, 255, 50);
  ellipse(frameCount / 6, 95, 40, 20);

  // Green Ground
  noStroke();
  fill(0, 100, 0); // rgb
  rect(0, 350, width, 1000);


  //street
  fill('#6E6C6C');
  quad(660, 350, 740, 350, 1175, 1000, 275, 1000);

  // left tree 1
  fill(67, 51, 8); // tree brown
  rect(420, 350, 10, 20); // trunk
  fill(23, 69, 29);
  ellipse(426, 372, 20, 20); // tree top
  ellipse(424, 392, 30, 20);
  ellipse(430, 382, 20, 20);
  //right tree1
  fill(67, 51, 8); // tree brown
  rect(920, 194, 10, 20); // trunk
  fill(23, 69, 29);
  ellipse(926, 172, 20, 20); // tree top
  ellipse(924, 192, 30, 20);
  ellipse(930, 182, 20, 20);

  // tree 2
  push();
  translate(-40, -40);
  scale(1.5);
  fill(67, 51, 8); // tree brown
  rect(320, 194, 10, 20); // trunk
  fill(23, 69, 29);
  ellipse(326, 192, 20, 20); // tree top
  ellipse(324, 172, 30, 20);
  ellipse(330, 182, 20, 20);
  pop();

  push();
  translate(-40, -40);
  scale(1.5);
  fill(67, 51, 8); // tree brown
  rect(720, 194, 10, 20); // trunk
  fill(23, 69, 29);
  ellipse(726, 192, 20, 20); // tree top
  ellipse(724, 172, 30, 20);
  ellipse(730, 182, 20, 20);

  pop();

}


function daylight() {
  // pretty sky
  for (var i = 0; i <= 500; i += 5) {

   strokeWeight(10);
      stroke(477 - i, 128 - i, 64);
      line(0, 350 - i, width, 350 - i); // x,y,x,y
    }

  // sun
  noStroke();
  fill(250, 186, 3);
  ellipse(700, daysunpos = daysunpos - .5, 70, 70);
  //  1
  //text(frameCount,200,150);



  // cloud
  fill(255, 255, 255, 50);
  ellipse(frameCount / 4, 150, 40, 20);

  // Green Ground2
  noStroke();
  fill(4, 107, 0); // rgb
  rect(0, 322, width, 1000);
  // Green Ground
  noStroke();
  fill(0, 100, 0); // rgb
  rect(0, 350, width, 1000);
//mountians

fill('#C0C0C0');
strokeWeight(0);
triangle(276, 161, 440, 322, 107, 322);


fill('#A0A0A0');
strokeWeight(0);
triangle(123, 119, 440, 322, -15, 322);

fill('#A0A0A0');
strokeWeight(0);
triangle(427, 147, 609, 322, 238, 322);


//mountians 2nd setup
fill('#808080');
strokeWeight(0);
triangle(427, 147, 609, 322, 178, 322);

fill('#808080');
strokeWeight(0);
triangle(25, 138, 259, 322, -15, 322);


fill('#606060');
strokeWeight(0);
triangle(0, 169, 255, 322, -30, 322);

fill('#606060');
strokeWeight(0);
triangle(344, 179, 633, 322, 196, 322);



  fill('#6E6C6C');
  quad(660, 350, 740, 350, 1175, 1000, 275, 1000);
  //street
  fill('#6E6C6C');
  quad(690, 322, 707, 323, 1175, 1000, 275, 1000);

  mouseLocation();
} // end daylight
