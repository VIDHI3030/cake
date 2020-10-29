var cake,cakeimage;
function preload (){
  cakeimage= loadImage("cake.jpg");
}
function setup() {
  createCanvas(400,400);
 cake= createSprite(200, 200, 150, 150);
 cake.addImage(cakeimage);
 }

function draw() {
  background(255,255,255); 
  drawSprites();

}
