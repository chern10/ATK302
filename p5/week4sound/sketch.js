var song1;

function preload() {
  song1 = loadSound('assets/cel.mp3'); // find an otf or ttf

}

function setup() {
  createCanvas(1000, 800);
  background(255, 0, 0)
  song1.play();
}

function draw() {

}

function mouseReleased() {
  if (song1.isPlaying()) {
    song1.pause();
  } else {
    song1.play();
  }
}
