let ocean;

function preload(){
    ocean = loadImage("ocean.jpg");
}

function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    image(ocean, 0, 0, width, height);
  }