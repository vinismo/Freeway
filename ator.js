//codigo do ator

let xAtor = 288;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
 image(imagemDoAtor, xAtor, yAtor, 30, 30);
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

//collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, larguraCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorParaPosicaoInicial();
      meusPontos = 0;
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width/2, 25);
  fill(color(255, 240, 60));
}

function marcaPonto() {
  if (yAtor < 15) {
    meusPontos += 1;
    voltaAtorParaPosicaoInicial();
  }
}
