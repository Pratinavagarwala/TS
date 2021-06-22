class Box {
  constructor(x,y,width,height) {
    var options = {
        restitution:0.6
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed<3){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("gold");
      rect(pos.x, pos.y, this.width, this.height);
    }else{
      World.remove(world,this.body);
      score=score+10;
    }
    
  }
};
