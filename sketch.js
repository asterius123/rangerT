var map ;
var P1 , P2 , P3 , P4;
var Cdoge , dogeImage;
var FireW , FireWImage , MagiB , MagiBImage , MagiG , MagiGImage , MagiM , MagiMImage , MagiP , MagiPImage , MagiR , MagiRImage , MagiS , MagiSImage , MagiY , MagiYImage;
var angulo = +45;
var velocidade = 2;
var valorM = 5;
var vidasM = 5;
var InimigosDestruidos = 0;
var vidaJ = 20;
var nivel = 1;
var SpritesInimigos , ObjetosInimigos = []
function preload() {
  map = loadImage("map1.png");
  dogeImage = loadImage("Rangers/comaDoge.png");
  MagiBImage = loadImage("Rangers/MagiBlue.png");
  MagiGImage = loadImage("Rangers/MagiGreen.png");
  MagiMImage = loadImage("Rangers/MagiMom.png");
  MagiPImage = loadImage("Rangers/MagiPink.png");
  MagiRImage = loadImage("Rangers/MagiRed.png");
  MagiSImage = loadImage("Rangers/MagiShine.png");
  MagiYImage = loadImage("Rangers/MagiYellow.png");
}
function setup() {
  createCanvas(1500,800);
  Cdoge = new Herois(278,300);
  Cdoge.sprite.addImage(dogeImage);
  SpritesInimigos = new Group();

  P1 = new Paredes(155,430,500,10,-3);
  P2 = new Paredes(720,400,10,500,-45);
  P3 = new Paredes(980,200,500,10,45);
  P4 = new Paredes(980,430,300,10,-3);
}

function draw() {
  background(map);  
  text(mouseX+ ", "+mouseY,10,10);

  //acionar a função de virar para cada parede e para cada monstro
  for (let i = 0; i < ObjetosInimigos.length; i++) {
    const M = ObjetosInimigos[i];
    M.virar();
  }
  gerarInimigos();
  drawSprites();
}
function gerarInimigos(){
  if (SpritesInimigos.length === 0) {
    var Monstro = new Inimigo (velocidade,vidasM,valorM,true);
    SpritesInimigos.add(Monstro.sprite);
    ObjetosInimigos.push(Monstro);
  } else if(SpritesInimigos[SpritesInimigos.length-1].x>200){
    //if () {
      
    //}
    Monstro = new Inimigo (velocidade,vidasM,valorM,true);
    SpritesInimigos.add(Monstro.sprite);
    ObjetosInimigos.push(Monstro);
  }
}