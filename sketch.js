
// using variables
let circleLocation = [200, 300]
let circleSize = 200;//Varying the Size of Your Circle 
let squareLocation = [200, 0]
let squareSize = [200, 200]
let toggle = false

let triangleLocation = {
  x1: 0,
  y1: 0,
  x2: this.x1 - 0,
  y2: this.y1 - 200,
  x3: this.x1 - 200,
  y3: this.y1 - 200
}

// arrays
let arrayOfColours = ['red','green', 'blue']; // Varying the Colour of the Shapes 
let fade = 100

// calling functions
function setup() {  
  // Creating a Canvas 
  createCanvas(windowWidth, windowHeight); // Preparing our Sketches to Share  
  print('What colour is your circle?'); // Printing a Message to the Console Pane  
  print(random()); // Introducing Variability into the Sketches 35  
  strokeWeight(10); // Drawing a Point  
  // noLoop(); // Controlling the Draw Loop  
  loop(); // Looping Through the Variations  
  frameRate(10); // Looping Through the Variations 
} 

// creating functions, event listeners
function mousePressed() {
  toggle = !toggle; // change the toggle value to be opposite.
}

// objects
// classes

function draw() {  
  background('black'); // Preparing our Sketches to Share  
  shuffle(arrayOfColours, true); // Varying the Colour of the Shapes  
  noStroke(); // Setting Colours  

  fill(255,255,224,fade); // Varying the Colour of the Shapes  
  triangleLocation.x1 = random(width); // Preserving the Shape of Your Triangle 
  triangleLocation.y1 = random(height); // Preserving the Shape of Your Triangle  

  // + operator
  triangle(triangleLocation.x1, triangleLocation.y1, triangleLocation.x1 + triangleLocation.x2, triangleLocation.y1 + triangleLocation.y2, triangleLocation.x1 + triangleLocation.x3, triangleLocation.y1 + triangleLocation.y3); // Preserving the Shape of Your Triangle  

  fill(255,0,0,fade); // Varying the Colour of the Shapes  

  squareSize = [random(width), squareSize[0]]; // Varying the Size of Your Square 
  rect(random(width), random(height), squareSize[0], squareSize[1]); // Varying the Size of Your Square 
  fill(0,255,0,fade); // Varying the Colour of the Shapes 
  ellipse(random(width), random(height), random(width)); // Varying the Size of Your Circle 
  fill(0,0,255,fade); // Varying the Colour of the Shapes 
  beginShape(); // Creating a Custom Shape 

  // for loops
  for (i=0; i++; i<=5) {
    vertex(random(width), random(height)); // Creating a Custom Shape
  }
  endShape(); // Creating a Custom Shape 

  // if statements and boolean
  if(frameCount % 3 == 0 && frameCount % 5 == 0) {
    fade = fade - frameCount
  } else if (true) {

  } else {

  }
  
}