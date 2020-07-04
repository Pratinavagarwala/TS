var ground,polygon,ob1,ob2,ob3,ob4,ob5,ob6,ob7,ob8,ob9;

function setup() {
  createCanvas(800,400);
  ground= new Ground(400,200,5,20);
  ground.shapeColor="brown";

  ob1=new Box(330,235,30,40);
  ob1.shapeColor="green";

  ob2=new Box(360,235,30,40);
  ob2.shapeColor="green";

  ob3=new Box(390,235,30,40);
  ob3.shapeColor="green";

  ob4=new Box(420,235,30,40);
  ob4.shapeColor="green";

  ob5=new Box(450,235,30,40);
  ob5.shapeColor="green";

  ob6=new Box(360,195,30,40);
  ob6.shapeColor="pink";

  ob7=new Box(390,195,30,40);
  ob7.shapeColor="pink";
  
  ob8=new Box(420,195,30,40);
  ob8.shapeColor="pink";

  ob9=new Box(390,155,30,40);
  ob9.shapeColor="Blue";
  
}

function draw() {
  background(255,255,255); 
  ground.display();
  ob1.display();
  ob2.display();
  ob3.display();
  ob4.display();
  ob5.display();
  ob6.display();
  ob7.display();
  ob8.display();
  ob9.display();
  
  
  drawSprites();
}