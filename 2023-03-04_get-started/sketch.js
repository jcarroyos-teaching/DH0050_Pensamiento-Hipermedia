// Where is the car
let x, y;

// crear la clase Carro
class Carro {
  constructor(alto,ancho,color,name){
    this.alto = alto;
    this.ancho = ancho;
    this.color = color;
    this.name = name;
  } 
}



function setup() {

  createCanvas(400, 200);
  // Start position
  y = height - height/4;
  x = 0;
  // crear una instancia de Carro llamada miCarro
  let miCarro = new Carro (10,20,(red),"miNave");
  
  console.log("miCarro ancho is: " + miCarro.ancho);
  console.log("miCarro alto is: " + miCarro.alto);
  console.log("Nombre de miCarro es: " + miCarro.name);
}

function draw() {
  background(200);  
  display();
  move();
  //console.log(miCarro.alto);
  
  let miCarro = new Carro (10,20,(red),"miNave");
  
}

function move(){
  // Jiggling randomly
  y = y + random(-1, 1);
  
  if (x > width) {
    // Reset 
    x = 0;
    y = height - height/4;
  } else {
    // Moving up at a constant speed
    x = x + 1;
  }
}

function display(){
  // Draw a car
  stroke(50);
  fill(255,4,150);
  rect(x, y, 20, 10);
}
