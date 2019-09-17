var sunflowers;

var myFont;
var x=0


function preload() {
  myFont = loadFont('assets/Welcome.ttf');  // find an otf or ttf
}

function setup() {
  createCanvas(1000, 800) ;
}
function draw() {
  background("white");
  fill('#ED225D');   // SETS the color
  textFont(myFont);  // SETS the font
  textSize(100);	// SETS the size of the font
  text('Sunny Days',x, 50); // DISPLAYS TEXT WITH THE FONT

  x=x+1;// x++
  if (x> width) {//this is what makes it loop
    x=0;
  }
}
