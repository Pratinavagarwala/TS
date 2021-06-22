const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World
const Constraint=Matter.Constraint
var engine,world
var ground,polygon,ob1,ob2,ob3,ob4,ob5,ob6,ob7,ob8,ob9;
var score =0;
function setup() {
  createCanvas(800,400);

  engine=Engine.create()
  world=engine.world

  ground= new Ground(400,height-20,width,20);

  platform= new Ground(390,270,170,20);

  polygon=new Polygon(100,100,50,50);

  ob1=new Box(330,235,30,40);
  
  slingshot=new Slingshot(polygon.body,{x:100,y:100})

  ob2=new Box(360,235,30,40);
  

  ob3=new Box(390,235,30,40);
  

  ob4=new Box(420,235,30,40);
  

  ob5=new Box(450,235,30,40);
  
  ob6=new Box(360,195,30,40);
  

  ob7=new Box(390,195,30,40);
  
  
  ob8=new Box(420,195,30,40);
  

  ob9=new Box(390,155,30,40);
  
  
}

function draw() {
  background(200); 
  Engine.update(engine)
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
  platform.display();
  polygon.display();
  slingshot.display();
  text(score,100,100);
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingshot.fly()
}