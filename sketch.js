var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = rgb(80,80,80)
  car.velocityX = speed;
}

function draw() {
  background("skyBlue");  
  if(wall.x - car.x < wall.width/2 + car.width/2)
  {
    car.velocityX = 0
    car.X = wall.X
    Deformation = (0.5 * weight * speed * speed )/22500;
    if(Deformation<100){
      car.shapeColor = rgb(0,255,0);
     
    }
    else if(Deformation>100 && Deformation<180){
      car.shapeColor = rgb(230,230,0);

    }
    else if(Deformation>180){
      car.shapeColor = rgb(255,0,0);


    }
  }
  drawSprites();
}