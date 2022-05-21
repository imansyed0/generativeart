let circleX = 200;// Varying the Placement of the Circle
let circleY = 300;// Varying the Placement of the Circle
let circleWidth = 200;//Varying the Size of Your Circle 
let squareX = 200;// Varying the Placement of the Square
let squareY = 0;// Varying the Placement of the Square
let squareWidth = 200; // Varying the Size of Your Square
let squareHeight = 200; // Varying the Size of Your Square 
let triangleX1 = 0; // Varying the Placement and Shape of Your Triangle 
let triangleY1 = 0; // Varying the Placement and Shape of Your Triangle
// let triangleX2 = 0; // Varying the Placement and Shape of Your Triangle 
// let triangleY2 = 200; // Varying the Placement and Shape of Your Triangle 
// let triangleX3 = 200; // Varying the Placement and Shape of Your Triangle 
// let triangleY3 = 200; // Varying the Placement and Shape of Your Triangle 
let triangleX2 = 0 - triangleX1; // Preserving the Shape of Your Triangle
let triangleY2 = 200 - triangleY1; // Preserving the Shape of Your Triangle 
let triangleX3 = 200 - triangleX1; // Preserving the Shape of Your Triangle 
let triangleY3 = 200 - triangleY1; // Preserving the Shape of Your Triangle 
let arrayOfColours = ['red', 'yellow', 'blue']; // Varying the Colour of the Shapes 
function setup() {  
  //  createCanvas(400, 400); 
  // Skeleton sketch  
  // createCanvas(200,600); 
  // Creating a Canvas 
  createCanvas(windowWidth, windowHeight); // Preparing our Sketches to Share  
  print('What colour is your circle?'); // Printing a Message to the Console Pane  
  print(random()); // Introducing Variability into the Sketches 35  
  print(random(10)); // Introducing Variability into the Sketches  
  print(random(90, 100)); // Introducing Variability into the Sketches  
  strokeWeight(10); // Drawing a Point  
  // noLoop(); // Controlling the Draw Loop  
  loop(); // Looping Through the Variations  
  frameRate(1); // Looping Through the Variations 
} 
function draw() {  
  // background(220); // Skeleton sketch  
  //  background('lightgrey'); // Changing the Colour of the Canvas  
  background('black'); // Preparing our Sketches to Share  
  shuffle(arrayOfColours, true); // Varying the Colour of the Shapes  
  noStroke(); // Setting Colours  
  point(200, 200); // Drawing a Point  
  line(200, 0, 200, 400); // Drawing a Line  
  line(0, 200, 400, 200); // Drawing a Line  
  line(100, 0, 100, 400); // Drawing a Line  
  line(300, 0, 300, 400); // Drawing a Line  
  line(0, 100, 400, 100); // Drawing a Line  
  line(0, 300, 400, 300); // Drawing a Line  
  // fill('red'); // Setting Colours  
  fill(arrayOfColours[0]); // Varying the Colour of the Shapes  
  // triangle(0, 0, 0, 200, 200, 200); // Drawing a Triangle  
  // triangle(random(triangleX1), random(triangleY1), random(triangleX2), random(triangleY2), random(triangleX3), random(triangleY3)); // Varying the Placement and Shape of Your Triangle 
  triangleX1 = random(width); // Preserving the Shape of Your Triangle 
  triangleY1 = random(height); // Preserving the Shape of Your Triangle  
  triangle(triangleX1, triangleY1, triangleX1 + triangleX2, triangleY1 + triangleY2, triangleX1 + triangleX3, triangleY1 + triangleY3); // Preserving the Shape of Your Triangle  
  // fill('yellow'); // Setting Colours  
  fill(arrayOfColours[1]); // Varying the Colour of the Shapes  
  // rect(200, 0, 200, 200); // Drawing a Rectangle  
  // rect(random(squareX),random(squareY), 200, 200); // Varying the Placement of the Square 36
  // rect(random(width), random(height), 200, 200); // Placing Shapes Anywhere on the Canvas 
  // rect(random(width), random(height), random(squareWidth), random(squareHeight)); // Varying the Size of Your Square
  squareWidth = random(width); // Varying the Size of Your Square 
  squareHeight = squareWidth; // Varying the Size of Your Square 
  rect(random(width), random(height), squareWidth, squareHeight); // Varying the Size of Your Square 
  // fill('blue'); // Setting Colours
  fill(arrayOfColours[2]); // Varying the Colour of the Shapes 
  // ellipse(200, 300, 200); // Drawing and Ellipse 
  // ellipse(random(circleX),random(circleY), 200); // Varying the Placement of the Circle 
  // ellipse(random(width), random(height), 200); //Placing Shapes Anywhere on the Canvas 
  //  ellipse(random(width), random(height), random(circleWidth)); // Varying the Size of Your Circle 
  ellipse(random(width), random(height), random(width)); // Varying the Size of Your Circle 
  fill(arrayOfColours[int(random(0, 3))]); // Creating a Custom Shape 
  beginShape(); // Creating a Custom Shape 
  vertex(random(width), random(height)); // Creating a Custom Shape
  vertex(random(width), random(height)); // Creating a Custom Shape 
  vertex(random(width), random(height)); // Creating a Custom Shape 
  vertex(random(width), random(height)); // Creating a Custom Shape 
  vertex(random(width), random(height)); // Creating a Custom Shape 
  endShape(); // Creating a Custom Shape 
}