class Paper{
    constructor(x,y,r){
        var options= {
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:0.8
        }
        this.image = loadImage("paper.png")
        this.body= Bodies.circle(x,y,r,options);
        this.r= r
        World.add(world,this.body)
       
    }
    display(){
        var pos= this.body.position
        var angle= this.body.angle
        push();
        translate(pos.x,pos.y);
            rotate(angle);
            stroke("white")
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r)
        imageMode(CENTER)
        image(this.image, 0, 0, 70,70)
        pop();
        console.log("hi")
    }
}
