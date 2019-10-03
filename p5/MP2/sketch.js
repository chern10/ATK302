var myState=0;
var mytimer=0;
var timer = 200;
var x=0;
var velocity=5;
function setup() {
  createCanvas(1403,800);
  // put setup code here
}

function draw() {
  let c;
  noStroke(); // Don't draw a stroke around shapes
  c = color('#181568');
  fill(c); // Use 'c' as fill color
  rect(0, 0, 1439, 40); // Draw rectangle2

  noStroke(); // Don't draw a stroke around shapes
  c = color('#173189');
  fill(c); // Use 'c' as fill color
  rect(0, 30, 1439, 50); // Draw rectangle

  noStroke(); // Don't draw a stroke around shapes
  c = color('#2845A6');
  fill(c); // Use 'c' as fill color
  rect(0, 60, 1439, 50); // Draw rectangle

  c = color('#2845A6');
  fill(c); // Use updated 'c' as fill color
  rect(0, 85, 1439, 30); // Draw rectangle

  c = color('#4D50A5');
  fill(c); // Use updated 'c' as fill color
  rect(0, 105, 1439, 20); // Draw rectangle

  c = color('#5C4DA5');
  fill(c); // Use updated 'c' as fill color
  rect(0, 125, 1439, 20); // Draw rectangle

  c = color('#6D4DA5');
  fill(c); // Use updated 'c' as fill color
  rect(0, 145, 1439, 10); // Draw rectangle

  c = color('#824DA5');
  fill(c); // Use updated 'c' as fill color
  rect(0, 155, 1439, 10); // Draw rectangle

  c = color('#8E4DA5');
  fill(c); // Use updated 'c' as fill color
  rect(0, 165, 1439, 10); // Draw rectangle

  c = color('#A54DA2');
  fill(c); // Use updated 'c' as fill color
  rect(0, 175, 1439, 10); // Draw rectangle

  c = color('#A54D90');
  fill(c); // Use updated 'c' as fill color
  rect(0, 185, 1439, 10); // Draw rectangle

  c = color('#A54D4D');
  fill(c); // Use updated 'c' as fill color
  rect(0, 195, 1439, 10); // Draw rectangle

  c = color('#B03B3B');
  fill(c); // Use updated 'c' as fill color
  rect(0, 200, 1439, 5); // Draw rectangle

  c = color('#B52929');
  fill(c); // Use updated 'c' as fill color
  rect(0, 205, 1439, 5); // Draw rectangle

  c = color('#B52929');
  fill(c); // Use updated 'c' as fill color
  rect(0, 210, 1439, 5); // Draw rectangle

  c = color('#C14B27');
  fill(c); // Use updated 'c' as fill color
  rect(0, 215, 1439, 5); // Draw rectangle

  c = color('#C14B27');
  fill(c); // Use updated 'c' as fill color
  rect(0, 220, 1439, 5); // Draw rectangle

  c = color('#C15F27');
  fill(c); // Use updated 'c' as fill color
  rect(0, 225, 1439, 10); // Draw rectangle

  c = color('#C15F27');
  fill(c); // Use updated 'c' as fill color
  rect(0, 230, 1439, 5); // Draw rectangle

  c = color('#C15F27');
  fill(c); // Use updated 'c' as fill color
  rect(0, 235, 1439, 5); // Draw rectangle

  c = color('#C17427');
  fill(c); // Use updated 'c' as fill color
  rect(0, 240, 1439, 10); // Draw rectangle

  c = color('#C18927');
  fill(c); // Use updated 'c' as fill color
  rect(0, 250, 1439, 17); // Draw rectangle

  c = color('#C19827');
  fill(c); // Use updated 'c' as fill color
  rect(0, 265, 1439, 20); // Draw rectangle

  c = color('#CB9F26');
  fill(c); // Use updated 'c' as fill color
  rect(0, 270, 1439, 5); // Draw rectangle

  c = color('#CBA526');
  fill(c); // Use updated 'c' as fill color
  rect(0, 275, 1439, 5); // Draw rectangle

  c = color('#D2AA23');
  fill(c); // Use updated 'c' as fill color
  rect(0, 280, 1439, 5); // Draw rectangle

  c = color('#E2B521');
  fill(c); // Use updated 'c' as fill color
  rect(0,285, 1439, 7); // Draw rectangle

  c = color('#E2BB21');
  fill(c); // Use updated 'c' as fill color
  rect(0, 290, 1439, 9); // Draw rectangle

  c = color('#ECC527');
  fill(c); // Use updated 'c' as fill color
  rect(0,295, 1439, 9); // Draw rectangle

  c = color('#FDD537');
  fill(c); // Use updated 'c' as fill color
  rect(0,300, 1439,10); // Draw rectangle

  c = color('#FDE337');
  fill(c); // Use updated 'c' as fill color
  rect(0,310, 1439,25); // Draw rectangle

  c = color('#FDE937');
  fill(c); // Use updated 'c' as fill color
  rect(0,325, 1439,75); // Draw rectangle

  c = color('#FDF037');
  fill(c); // Use updated 'c' as fill color
  rect(0,345, 1439,225); // Draw rectangle

  fill('#F0FF11');
  arc(634, 569, 200, 200, PI, TWO_PI);

  c = color('#0E8D49');
  fill(c); // Use updated 'c' as fill color
  rect(0, 569, 1439, 569); // Draw rectangle

    noStroke();

  //face of avatar
  fill('#0E238D'); //face
  ellipse(635, 445, 60,70);

  fill('#1EE9E9');
  circle(620,438,20);

  fill('#1EE9E9');
  circle(650,438,20);

  fill('black');
  circle(620,438,10);

  fill('black');
  circle(650,438,10);

  fill('#EDF086')
  triangle(634,452, 627, 459, 640,470);


  //body of avatar

  // Draw a rectangle with rounded corners having the following radii:
  // top-left = 20, top-right = 15, bottom-right = 10, bottom-left = 5.
  fill('#0E238D')
  rect(627,475, 17, 37, 20, 15, 10, 10);

  fill('#0E238D');
  ellipse(636, 524, 85, 63);

  //feet
  fill('#FFFFE4')
  rect(623,550,5, 25);

  fill('#FFFFE4')
  rect(643,550,5, 25);


  //feathers of avatar
  stroke(126);
  line(479, 525, 593, 525);

  fill('#216F2B');
  circle(479, 525, 40);

  fill('#996600');
  circle(479,525, 30);

  fill('#1EE9E9');
  circle(479,525, 20);

  fill('#030386');
  circle(479,525, 13);

  //
  stroke(126);
  line(550, 453, 608, 503);

  fill('#216F2B');
  circle(550, 453, 40);

  fill('#996600');
  circle(550,453, 30);

  fill('#1EE9E9');
  circle(550,453, 20);

  fill('#030386');
  circle(550,453, 13);
  //2nd set

  fill('#216F2B');
  circle(577, 477, 30);

  fill('#996600');
  circle(577,477, 20);

  fill('#1EE9E9');
  circle(577,477, 10);

  fill('#030386');
  circle(577,477, 5);


  //feather circle

  stroke(126);
  line(512,457,601,505);

  fill('#216F2B');
  circle(512,457, 40);

  fill('#996600');
  circle(512,457, 30);

  fill('#1EE9E9');
  circle(512,457, 20);

  fill('#030386');
  circle(512,457, 13);



  // Draw a circle at location (30, 30) with a diameter of 20.

  stroke(126);
  line(514,544,595,535);

  fill('#216F2B');
  circle(514, 544, 40);

  fill('#996600');
  circle(514,544, 30);

  fill('#1EE9E9');
  circle(514,544, 20);

  fill('#030386');
  circle(514,544, 13);
  //2nd set of feathers

  fill('#216F2B');
  circle(556, 539, 30);

  fill('#996600');
  circle(556,539, 20);

  fill('#1EE9E9');
  circle(556,539, 10);

  fill('#030386');
  circle(556,539, 5);
  //
  stroke(126);
  line(517,494,595,518);

  fill('#216F2B');
  circle(517, 494, 40);

  fill('#996600');
  circle(517,494, 30);

  fill('#1EE9E9');
  circle(517,494, 20);

  fill('#030386');
  circle(517,494, 13);

  //2nd set of feathers

  fill('#216F2B');
  circle(562, 508, 30);

  fill('#996600');
  circle(562,508, 20);

  fill('#1EE9E9');
  circle(562,508, 10);

  fill('#030386');
  circle(562,508, 5);

  // 1st set of feathers
  stroke(126);
  line(564,419,615,495);

  fill('#216F2B');
  circle(564, 419, 40);

  fill('#996600');
  circle(564,419, 30);

  fill('#1EE9E9');
  circle(564,419, 20);

  fill('#030386');
  circle(564,419, 13);

  //
  stroke(126);
  line(632,371,632,411);

  fill('#216F2B');
  circle(632, 371, 40);

  fill('#996600');
  circle(632,371, 30);

  fill('#1EE9E9');
  circle(632,371, 20);

  fill('#030386');
  circle(632,371, 13);

  //
  stroke(126);
  line(677,525,793,525);

  fill('#216F2B');
  circle(793,525, 40);

  fill('#996600');
  circle(793,525, 30);

  fill('#1EE9E9');
  circle(793,525, 20);

  fill('#030386');
  circle(793,525, 13);

  //

  stroke(126);
  line(769,457,671,505);

  fill('#216F2B');
  circle(769, 457, 40);

  fill('#996600');
  circle(769,457, 30);

  fill('#1EE9E9');
  circle(769,457, 20);

  fill('#030386');
  circle(769,457, 13);
  //

  stroke(126);
  line(702,419,656,495);

  fill('#216F2B');
  circle(702, 419, 40);

  fill('#996600');
  circle(702,419, 30);

  fill('#1EE9E9');
  circle(702,419, 20);

  fill('#030386');
  circle(702,419, 13);
  // 1st set of feather
  stroke(126);
  line(676,535,740,539);

  fill('#216F2B');
  circle(755, 539, 40);

  fill('#996600');
  circle(755,539, 30);

  fill('#1EE9E9');
  circle(755,539, 20);

  fill('#030386');
  circle(755,539, 13);
  // 2nd set

  fill('#216F2B');
  circle(708, 536, 30);

  fill('#996600');
  circle(708,536, 20);

  fill('#1EE9E9');
  circle(708,536, 10);

  fill('#030386');
  circle(708,536, 5);
  //

  stroke(126);
  line(677,518,754,491);


  fill('#216F2B');
  circle(754, 491, 40);

  fill('#996600');
  circle(754,491, 30);

  fill('#1EE9E9');
  circle(754,491, 20);

  fill('#030386');
  circle(754,491, 13);
  //2nd set
  fill('#216F2B');
  circle(713, 506, 30);

  fill('#996600');
  circle(713,506, 20);

  fill('#1EE9E9');
  circle(713,506, 10);

  fill('#030386');
  circle(713,506, 5);


  stroke(126);
  line(663,499,714,453);


  fill('#216F2B');
  circle(714, 453, 40);

  fill('#996600');
  circle(714,453, 30);

  fill('#1EE9E9');
  circle(714,453, 20);

  fill('#030386');
  circle(714,453, 13);

  //2nd set
  fill('#216F2B');
  circle(683, 481, 30);

  fill('#996600');
  circle(683,481, 20);

  fill('#1EE9E9');
  circle(683,481, 10);

  fill('#030386');
  circle(683,481, 5);
  //extra
  stroke(126);
  line(595,404,611,422);

  fill('#216F2B');
  circle(593, 396, 30);

  fill('#996600');
  circle(593,396, 20);

  fill('#1EE9E9');
  circle(593,396, 10);

  fill('#030386');
  circle(593,396, 5);
  //extra

  stroke(126);
  line(667,400,653,416);
  fill('#216F2B');
  circle(667,396, 30);

  fill('#996600');
  circle(667,396, 20);

  fill('#1EE9E9');
  circle(667,396, 10);

  fill('#030386');
  circle(667,396, 5);

  switch(myState){
    case 0:
    

    doTimer(1,50);
    velocity=5;
    break;

    case 1:

    doTimer(2,100);
    velocity=2;
    break;

    case 2:
    doTimer(0,200);
    velocity=0;
    break;

    case 3:
    break;

    case 4:
    break;
  }
  // put drawing code here
  x=x+velocity;
  if(x>width){
    x=0;
}
function doTimer(variableState,variableTimer){
  timer--;
if(timer<=0){
  myState=variableState;
  timer=variableTimer;}
}
}
