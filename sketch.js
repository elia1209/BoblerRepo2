
let ocean;

function preload(){
    ocean = loadImage("ocean.jpg");
}

let bobles = [];

function setup() {
    createCanvas(800, 800);
    image(ocean, 0, 0, width, height);
    for(let i; i < 15; i++){
    bobles.push(new boble())
}

  }
  
  function draw(){ 
    for(let bobler of bobles){
      move.boble
      display.boble
    }
  }
  