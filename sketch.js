var map , Cdoge , Doge , dogeImage;
function preload() {
  map = loadImage("map1.png");
  dogeImage = loadImage("Rangers/comaDoge.png");
}
function setup() {
  createCanvas(1500,800);
  Cdoge = new Herois(278,350);
  Cdoge.sprite.addImage(dogeImage);
}

function draw() {
  background(map);  
  text(mouseX+ ", "+mouseY,10,10)
  drawSprites();
}