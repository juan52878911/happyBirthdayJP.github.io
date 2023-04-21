// Variables
let plato;
let fontsize = 32;

let _text;

let text ='Feliz cumpleaños!!';

let confettiColor = [], confetti = [];

function preload() {
    plato = loadModel("assets/plato.obj", () => console.log("Pastel cargado!!"));
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);


  // Texto
  _text = createGraphics(window.innerWidth - 4, window.innerHeight - 4);
  _text.textFont('Source Code Pro');
  _text.textAlign(CENTER);
  _text.textSize(fontsize);
  _text.fill(167, 230, 217 );
  _text.noStroke();
  _text.text(text, width * 0.5, height * 0.5);

  // Confeti
  confettiColor = [color('#00aeef'), color('#ec008c'), color('#72c8b6')];
  for (let i = 0; i < 100; i++) {
    confetti[i] = new Confetti(random(0, width*2), random(-height, 0), random(-1, 1));
  }
}

function draw() {
  background(14, 102, 85 );

  scale(2);
  
  // circulod e fondo
  fill(65, 172, 151 );
  translate(0, 0, -100);
  ellipse(0, 0, height/3);

  // texto
  texture(_text);
  plane(window.innerWidth - 4, window.innerHeight - 4);

  // Confetti

  scale(.4);
  translate(-width, 0, 0);
  for (let i = 0; i < confetti.length / 2; i++) {
    confetti[i].confettiDisplay();

    if (confetti[i].y > height) {
      confetti[i] = new Confetti(random(0, width*2), random(-height, 0), random(-1, 1));
    }
  }

  for (let i = int(confetti.length / 2); i < confetti.length; i++) {
    confetti[i].confettiDisplay();

    if (confetti[i].y > height) {
      confetti[i] = new Confetti(random(0, width*2), random(-height, 0), random(-1, 1));
    }
  }

  translate(width, 0, 100);
  scale(3);

  ambientLight(100, 100, 100);
  directionalLight(10, 200, 200, 1, 0.5, -1);
  directionalLight(70, 70, 100, -0.5, 1, 0.5)
  
  // rotamos el modelo
  rotateY(frameCount * 0.01);  

  noStroke();
  fill('lightblue');
  translate(0, 80, 0);
  scale(50, -40, 50);
  model(plato);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight, WEBGL);

  _text = createGraphics(window.innerWidth - 4, window.innerHeight - 4);
  _text.textFont('Source Code Pro');
  _text.textAlign(CENTER);
  _text.textSize(fontsize);
  _text.fill(167, 230, 217 );
  _text.noStroke();
  _text.text(text, width * 0.5, height * 0.5);
}
