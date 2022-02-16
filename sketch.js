var map , vermelho , Doge , dogeImage;
function preload() {
  map = loadImage("map1.png");
  dogeImage = loadImage("Rangers/comaDoge.png");
}
function setup() {
  createCanvas(1500,800);
  vermelho = new Herois(278,350);
  vermelho = Doge;
  Doge.addImage(dogeImage);
}

function draw() {
  background(map);  
  text(mouseX+ ", "+mouseY,10,10)
  drawSprites();
}