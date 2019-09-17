var x=0;
var y=0;
function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  background(100);
  fill("orange");
  rect(x,height/2,10,10);
  x=x+1;
  //if you change the +1 it changes the speed
  //x += 5;
rect(width/2,y,10,10);
y+=5;

  if (y> width) {
    y=0;
  }

  if (x> width) {
    x=0;
  }


}
