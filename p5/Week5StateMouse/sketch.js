var myState=0;
function setup() {
  // put setup code here
  createCanvas(800,800);
}

function draw() {
  // put drawing code here
  switch(myState){

    case 0:
    background("purple");
    text("case0",100,100);
    break;

    case 1:
    background("green");
    text("case1",100,100);
    break;

    case 2:
    background("coral");
    text("case2",100,100);
    break;

  }

}
function mouseReleased(){
  //add one to myState
  // if myState got past 2, reset it to 0
  myState++;
  if(myState >2){
    myState=0;
  }
//or
//myState = (myState + 1)% 3;
}
