class hammer{
  constructor(x,y,width,height,angle){
      var options={
        'restitution':0.5,
        'friction':1.0,
        'density':2
      }
      this.body=Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;
      World.add(world,this.body);
      
    }

    display(){
      
     var angle=this.body.angle;
     var pos=this.body.position;
     pos.x=mouseX;
      pos.y= mouseY;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     rectMode(CENTER);
     fill("black")
     rect(0,0,this.width,this.height);
     pop();
    }
}