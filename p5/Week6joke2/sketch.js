let state=0;
let myTimer = 0;
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
    myTimer++;
    if (myTimer >= 200){
        state++ ;  // this will go to the next state. You can also put myState = 3 or something
        myTimer = 0 ;  // people always forget to reset the timer!!

     }

    break;

    case 1://punchline
    background('white');
    text("Because he felt crummy",100,100);
    break;

  }
}
