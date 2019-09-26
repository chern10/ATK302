let state=0;
function setup() {
  // put setup code here
  createCanvas(800,800);
}

function draw() {
  // put drawing code here
  switch(state){
    case 0:
    background('red');
    text("why did the cookie go to the hospital?",100,100);
    break;

    case 1://punchline
    background('white');
    text("Because he felt crummy",100,100);
    break;

  }
}
function mouseReleased(){
  state=state+1;

  if(state >1){
    state=0;
  }
}
