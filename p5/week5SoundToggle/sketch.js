var piano;
function preload(){
  piano=loadSound('assets/piano.mp3');
}
function setup() {
  // put setup code here
  song1.play();
}

function draw() {
  // put drawing code here
}
function mouseReleased() {
  if (piano.isPlaying()) {
    piano.pause();
  } else {
    piano.play();
  }
}
