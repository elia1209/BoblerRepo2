class boble {
    constructor() {
      this.radius = random(5, 20);
      this.x = random(width);
      this.y = height + this.radius;
      this.speed = random(1, 3);
    }
  
    move() {
      this.y -= this.speed;
      if(this.y + this.radius < 0) {
        this.y = height + this.radius;
        this.x = random(width);
      }
    }
  
    display() {
      fill(255, 255, 255, 70);
      ellipse(this.x, this.y, this.radius * 3);
    }
  }