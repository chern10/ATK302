var cars = [];
var frogPos;
var myState = 0;
var timer = 0;
var yoda, yodaL, yodaR;
var libra;
var birds = [];
var song1;
var universe;

function preload() {
  song1 = loadSound('images/om.mp3');
  song1.stop();

}

function setup() {

  createCanvas(800, 800);
  universe = loadImage("images/universe.jpg");
  //spawn cars

  libra = loadImage("images/libra.png")
  birds[0] = loadImage("images/bird1.png")
  birds[1] = loadImage("images/bird2.png")
  birds[2] = loadImage("images/bird3.png")
  yodaL = loadImage("images/libra.png");
  yodaR = loadImage("images/libra.png");
  yoda = yodaL;


  //spawn cars!!
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }


  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
}

function draw() {
  switch (myState) {

    case 0: // splash screen
      //welcome to my game, click to start
      background('Black');
      fill('white');
      textSize(40);
      text('Welcome to Our Universe', 100, 400);
      fill('white');
      textSize(30);
      text('Click to Start', 100, 500);

      break;

    case 1: // the game state
      song1.play();
      image(universe, 200, 400);
      game();
      timer++;
      if (timer > 800) {
        myState = 3;
        song1.stop();
        timer = 0;
      }
      break;

    case 2: // the win state
      background('purple');
      fill('orange');
      textSize(40);
      text('You Won!!!', 100, 400);
      break;

    case 3: // the lose state
      background('Black');
      fill('purple');
      textSize(40);
      text('You Lose!', 100, 400);
      break;

  }

}

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2: //win
      resetTheGame();
      myState = 0;

      break;

    case 3: //lose
      resetTheGame();
      myState = 0;

      break;

  }
}

// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.birdNum = floor(random(birds.length - 1));
  this.timer = 0;
  this.maxTimer = random(10, 30);

  // methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    //fill(this.r, this.g, this.b);
    //  ellipse(this.pos.x-45, this.pos.y+25, 50, 50);
    //  ellipse(this.pos.x+45, this.pos.y+25, 50, 50);
    //image(bird,this.pos.x,this.pos.y,100,100);
    image(birds[this.birdNum], this.pos.x, this.pos.y, 100, 100);

    this.timer = this.timer + 1;

    if (this.timer > this.maxTimer) {

      this.birdNum = this.birdNum + 1;
      if (this.birdNum > birds.length - 1) this.birdNum = 0;
      this.timer = 0;

    }

  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}

function keyPressed() {
  //=== exactly equal full on inten se
  if (keyCode === LEFT_ARROW) yoda = yodaL;
  if (keyCode === RIGHT_ARROW) yoda = yodaR;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

}

function resetTheGame() {
  car = []; //reset the cars
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }
  timer = 0;

}

function game() {
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1); //take the car out!!
      //if the car's type is a killer type, mystate=30

    }
  }
  if (cars.length == 0) {
    myState = 2;
    song1.stop();
  }
  // draw the frog
  fill('#ACFF2E');
  image(yoda, frogPos.x, frogPos.y);
  checkForKeys();
}
