
var myState = 1 ; // at the top of the program, above the setup

function setup() {
  createCanvas(800, 800) ;
}

function draw() {
  background(255);

switch(myState) {

   case 0:
   console.log("Go") ;
   myState = 7 ;
   break ;

   case 1:
   console.log("You") ;
   myState = 2 ;
   break ;

   case 2:
   console.log("Redbirds!") ;
   myState = 0 ;
   break ;

}

}
