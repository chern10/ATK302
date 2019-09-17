var x=0;
function setup() {
  // put setup code here
  createCanvas(800,800);
}

function draw() {
  // put drawing code here
  background(126);
  fill('pink');
  rect(x,10,10,10);


  text("LOVE",x,height/2);
  textSize(40);
  x+=5;
  if(x>800){
    x=0;
  }
}
