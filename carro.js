//código do carro

let xCarros = [300, 200, 600, 400, 100, 500];
let yCarros = [40, 96, 150, 210, 262, 317];
let velocidadeCarros = [2.0, 3.7, 3.0, -4.4, -2.3, -3.3];
let comprimentoCarro = 50;
let larguraCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; ++i){
    image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; ++i){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicial(){
  for (let i = 0; i < imagemCarros.length; ++i){
    if (passouTodaATelaD(xCarros[i])){
        xCarros[i] = 600;
    }
    if (passouTodaATelaE(xCarros[i])){
        xCarros[i] = -30;
    }
  }
}

function passouTodaATelaD(xCarro){
  return xCarro < - 50;
}

function passouTodaATelaE(xCarro){
  return xCarro > 600;
}


