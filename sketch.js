<<<<<<< HEAD
let ocean;

function preload(){
    ocean = loadImage("ocean.jpg");
}

function setup() {
    createCanvas(800, 800);
=======
let bobles = [];

function setup() {
    createCanvas(800, 800);
for(let i; i < 15; i++){
  bobles.push(new boble())
}

>>>>>>> master
  }
  
  function draw() {
    background(220);
<<<<<<< HEAD
    image(ocean, 0, 0, width, height);
=======
    for(let bobler of bobles){
      move.boble
      display.boble
    }
    

>>>>>>> master
  }