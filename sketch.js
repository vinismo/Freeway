//imagens
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;

//variaveis do carro
let xCarro = 600;

//variaveis ator
let xAtor = 100;
let yAtor = 366;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png")
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  mostraPista();
  mostraCarro();
  mostraAtor();
  movimentaCarro();
  movimentaAtor();
}

function mostraAtor(){
 image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function mostraCarro(){
  image(imagemCarro, xCarro, 40, 50, 40);
}

function mostraPista(){
  background(imagemDaEstrada);
}

function movimentaCarro(){
  loop(xCarro -= 2);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
  }
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
  }
}
