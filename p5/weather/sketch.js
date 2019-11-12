var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;


function setup() {
  createCanvas(400, 400);

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=60647,us&units=imperial&';
  var myIDString = 'appid=30ea1996f1b81698c4d2efa8c8dc3db5'; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.

}


function gotData(data) {
  weather = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
ws= weather.wind.speed;
temperature=weather.main.temp;
}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
          myState = 1;
      }
      break;

    case 1:
    background(200) ;
    fill('black');
    text("we have weather in " + weather.name, 20, 20) ;
    text("temperature=" + weather.main.temp,20,40);
    text("humidity is "+ weather.main.humidity,20,60);
    text("wind speed ="+ weather.wind.speed,20,80);

    fill('white');
    noStroke();
    ellipse(x,300,200,100);
    x= x + ws/3;
    if(x > width) x = 0;

    fill('red');
    var mappedTemp = 0;
    rect(width-30,height-10,20, -temperature);
    mappedTemp = map(temperature, -10, 100, 0, height);
    rect(width)
// parse the weather object and put some text for some at least 3 different weather data!
      break;

  }
}
