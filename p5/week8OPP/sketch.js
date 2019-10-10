var myCar1;
var myCar2;

function setup() {
  // put setup code here
  createCanvas(800,800);
  myCar1=new Car();//spun 1 car
  myCar2=new Car();
  myCar3=new Car();
}

function draw() {
  background('coral');

  myCar1.display();
  myCar1.drive();
  // put drawing code here

  myCar2.display();
  myCar2.drive();


  myCar3.display();
  myCar3.drive();
}

function Car(){
  //attributes looks like
  this.x=random(width);
  this.y=random(height);
  this.r=random(255);
  this.b=random(255);
  this.c=random(255);
  this.vel=random(5,10);
  //methods what ut does
  this.display=function() {
    fill(this.r,this.b,this.c);
    rect(this.x,this.y,100,50);
    circle(this.x,this.y,100,50);
  }
  this.drive=function() {
    this.x=this.x+5;
    if(this.x>width){
      this.x=0;
    }
    //x
  }
}
function doTimer(variableState,variableTimer){
  timer--;
if(timer<=0){
  myState=variableState;
  timer=variableTimer;}
}
