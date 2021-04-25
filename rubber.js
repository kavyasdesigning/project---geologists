class Rubber{
    constructor(x,y,radius){
    var options ={
        'restitution': 0.5,
        'friction': 1.5,
        'density': 1.9
    }
    this.x=x; 
    this.y=y; 
    this.radius=radius;
    this.body=Bodies.circle(this.x, this.y, (this.radius-20)/2, options); 
    World.add(world, this.body);
}
display(){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    fill("blue")
    ellipse(20,20,this.radius , this.radius);
    pop();
}
}