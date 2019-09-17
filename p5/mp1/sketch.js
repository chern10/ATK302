function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(237, 34, 93);
  fill(0);

  if (mouseIsPressed) {
    //add "pressed" shapes
    ellipse(width/2, height/2, 50, 50);
//add shapes






  } else {
    //this is for "unpressed"state
    rect(width/2, height/2, 50, 50);
  }
  function mouseReleased (){
    console.log(mouseX + ',' + mouseY);
}
