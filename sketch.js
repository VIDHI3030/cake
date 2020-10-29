var box1,box2;
function setup() {
  createCanvas(800,400);
 box1= createSprite(400, 400, 50, 50);
 box2= createSprite(50,50,50,50);
 box1.shapeColor="blue";
 box2.shapeColor="hotpink";
 box1.velocityX=-1;
 box1.velocityY=-1;
 box2.velocityX=1;
 box2.velocityY=1;
}

function draw() {
  background(255,255,255); 
  if (detectcollision(box1,box2)){
      box1.shapeColor="green";
      box2.shapeColor="black";
      
    /*}else{
      box1.shapeColor="blue";
      box2.shapeColor="hotpink";
*/
    }
bounceOff(box1,box2);
  drawSprites();

}
