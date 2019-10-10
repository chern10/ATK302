

var bands = ['localocalloca', 'Nickelback', 'PKIDS', 'Beatles', 'The Who', 'Lil Nas X'] ;
var aRandomBand = '' ;

function setup() {
  createCanvas(800, 800) ;
  textAlign(CENTER, CENTER) ;
}

function draw() {
  background('coral') ;
  textSize(48);
  fill('white');
  text(aRandomBand, width/2, height/2) ;
}

function mouseClicked() {

  var i = floor(random(bands.length)) ;  // floor changes the random to an integer

  aRandomBand = bands[i] ;


}
