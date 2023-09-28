let ocean;

function preload(){
    ocean = loadImage("ocean.jpg");
}

function setup() {
    createCanvas(800, 800);
  }
  
  function draw() {
    background(220);
    image(ocean, 0, 0, width, height);
  }