var namesArray = [];

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1N8dQCOV0IubP69yZpILTKAj9osYMAUDMiH3pggSQksU'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++) {
    namesArray.push(new Circle(data[i].platform));
  }

}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis == "Y") { // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      var inter = map(i, y, y + h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis == "X") { // Left to right gradient
    for (let j = x; j <= x + w; j++) {
      var inter2 = map(j, x, x + w, 0, 1);
      var d = lerpColor(c1, c2, inter2);
      stroke(d);
      line(j, y, j, y + h);
    }
  }
}

function draw() {
  var color1 = color(0, 0, 153);
  var color2 = color(204, 51, 0);
  setGradient(0, 0, windowWidth, windowHeight, color1, color2, "Y");
  for (var i = 0; i < 50; i++) {
    // Code goes here
  }
  var x = random(windowWidth);
  var y = random(windowHeight - 200);

  noStroke();
  fill(255, 255, 0);
  var starsize=random(6);
  ellipse(x, y, starsize,star);
  // // iterate through the namesArray and display the objects!
  for (let i = 0; i < namesArray.length; i++) {
    namesArray[i].display();
  }

}


// my circle class
function Circle(myName) {
  //pos means position
  //these are it's attributes
  this.pos = createVector(random(width), random(height));
  this.platform = myName;



  this.display = function() {

    text(this.platform, this.pos.x, this.pos.y);
  }
  // put an ellipse here

}
