var myState=0;
var mytimer=0;
function setup() {
  createCanvas(800,800);
  // put setup code here
}

function draw() {
  switch(myState){
    case 0:
    break;

    case 1:
    myTimer++;
    if(myTimer>200){
      myTimer=0;
      myTimer=2;
    }
    break;

    case 2:
    break;

    case 3:
    break;

    case 4:
    break;
  }
  // put drawing code here
}
function mouseReleased(){
  if(myState==0){
    myState=1;
  }
}
