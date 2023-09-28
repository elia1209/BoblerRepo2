let bobles = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 15; i++) {
    bobles.push(new boble());
  }
}

function draw() {
  background(0,0,0,70);
  for (let bobler of bobles) {
    bobler.move();
    bobler.display();
  }
}
