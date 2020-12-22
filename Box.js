class Box{
    constructor(x,y,width,height){
        var options={
           'restitution':0.8,
           'friction': 1.0,
           'density': 0.04
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }
    display(){
    var pos=this.body.position
    push();
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    strokeWeight(4)
    stroke("green");
    fill("white");
    rectMode(CENTER);
    rect(0,0, this.width, this.height)
    pop();
    }
    
    
    }