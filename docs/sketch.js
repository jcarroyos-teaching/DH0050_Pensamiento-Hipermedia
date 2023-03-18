
let miCarro1;
let miCarro2;

function setup() {
  song = loadSound('buzz.mp3');
  createCanvas(400, 200);
  miCarro1 = new Carro(0, 190, 50, 10, 1);
  miCarro2 = new Carro(width - 50, 190, 40, 10, -1);
}

function draw() {
  background(0);
  miCarro1.display("red");
  miCarro2.display("blue");
  
  if (miCarro1.detectCollision(miCarro2)) {
    console.log("Los carros han chocado");
  }
  
}

function keyPressed() {
  if (keyCode === 32) {
    miCarro1.saltar();
  }
}


class Carro {
  constructor(x, y, width, height, direction) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.direction = direction;
    this.isJumping = false;
    this.jumpForce = 10;
    this.gravity = 0.5;
    this.velocity = 0;
    this.xSpeed = 2;
  }

  display(color) {
    fill(color);
    rect(this.x, this.y, this.width, this.height);
    
    this.y = this.y + random(-0.65, 0.65);

    if (this.isJumping) {
      this.velocity += this.gravity;
      this.y += this.velocity;
      if (this.y >= height - this.height) {
        this.isJumping = false;
        this.y = height - this.height;
      }
    } else {
      this.x += this.direction * this.xSpeed;
      if (this.x + this.width > width || this.x < 0) {
        this.direction *= -1;
        this.y = 190;
      }
    }
        // Actualizamos la posición horizontal del carro en cada iteración
    this.x += this.direction * this.xSpeed;
    if (this.x + this.width > width || this.x < 0) {
      this.direction *= -1;
      this.y = 190;
    }
  }

  saltar() {
    if (!this.isJumping) {
      this.velocity = -this.jumpForce;
      this.isJumping = true;
    }
  }
  
    detectCollision(otherCar) {
    let left = this.x;
    let right = this.x + this.width;
    let top = this.y;
    let bottom = this.y + this.height;

    let otherLeft = otherCar.x;
    let otherRight = otherCar.x + otherCar.width;
    let otherTop = otherCar.y;
    let otherBottom = otherCar.y + otherCar.height;

    if (left < otherRight && right > otherLeft && top < otherBottom && bottom > otherTop) {
      return true;
    } else {
      return false;
    }
  }
}
