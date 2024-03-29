class Polygon {
    constructor(x,y,width,height) {
      var options = {
          restitution:0.6
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image=loadImage("polygon.png")
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };
  