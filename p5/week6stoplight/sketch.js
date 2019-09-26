let myState=0;
let myTimer=0;
function setup() {
  createCanvas(800,800);
  rectMode(CENTER);
  ellipseMode(CENTER);
  // put setup code here
}

function draw() {
  // put drawing code here
  background(255);
  fill('yellow');
  rect(width/2, height/2,150,500);

  switch (myState) {
    case 0:
    fill("red");
    ellipse(width/2,height/2-150,100,100);
    text("stop",100,100);

    fill("grey");
    ellipse(width/2,height/2,100,100);
    ellipse(width/2,height/2+150,100,100);
    myTimer++;
    if(myTimer >=200){
      myState=1;
      myTimer=0;}
    break;

    case 1:
    fill("yellow");
    ellipse(width/2,height/2,100,100);
    text("wait",100,100);

    fill("grey");
    ellipse(width/2,height/2+150,100,100);
    ellipse(width/2,height/2-150,100,100);
    myTimer++;
    if(myTimer >=200){
      myState=2;
      myTimer=0;}
    break;

    case 2:
    fill("green");
    ellipse(width/2,height/2+150,100,100);
    text("go!",100,100);

    fill("grey");
    ellipse(width/2,height/2,100,100);
    ellipse(width/2,height/2-150,100,100);
    myTimer++;
    if(myTimer >=200){
      myState=0;
      myTimer=0;}
    break;


  }
}
