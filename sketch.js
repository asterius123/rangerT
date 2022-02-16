var map ;
var Cdoge , dogeImage;
var FireW , FireWImage , MagiB , MagiBImage , MagiG , MagiGImage , MagiM , MagiMImage , MagiP , MagiPImage , MagiR , MagiRImage , MagiS , MagiSImage , MagiY , MagiYImage;
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
}

function draw() {
  background(map);  
  text(mouseX+ ", "+mouseY,10,10)
  drawSprites();
}