// Landscape Example
// Coding for Artists - 2019
// Instructor: Urban Reininger
var myState = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
} // end setup


function draw() {

  switch (myState) {
    case 0:
      nighttime();


      break;

    case 1:
      nighttime();

      break;

    case 2:
      daylight();

      break;

    case 3:

      break;

    case 4:

      break;


  }
}



function mouseReleased() {
  myState++;
  daysunpos=200;
  nightsunpos = 200 ;
  if (myState>2) myState=0;
}

function mouseLocation() {
  fill(255);
  text(("x: " + mouseX), 20, 10);
  text(("y: " + mouseY), 20, 20);
} // end mouseLocation
