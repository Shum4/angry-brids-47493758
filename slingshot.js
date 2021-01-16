class Slingshot{

    //passing a body and point in the constructor
    //in order to attach bird to a point(x,y)
    constructor(bodyA,pointB){
    
        //changed the properties for the chain
        //JSON format
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
            
        }
        //loads in the different parts of the slingshot
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.pointB= pointB;
        //created chain out of constraint class
        this.slingshot=Constraint.create(options);
        //added the chain to the main World
        World.add(world,this.slingshot);   
    
    }
    attach(body){
        this.slingshot.bodyA=body; 
    }
fly(){
    //to replace bodyA by nothing, ie make it empty
    this.slingshot.bodyA = null;
}
 display(){
    //added the right image for the slingshot
    image(this.sling1,200,20);
    //added the left image for the slingshot
    image(this.sling2,170,20);
    
    //to display a line only when there is some body in bodyA
    //it won't be displayed when it's null
    if(this.slingshot.bodyA){
        //namespaced body A and B positions
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB;
        //pushes in changes with the very next line
        push();
        //to show the link between the contrained bodies A and B
        //the color of the line
        stroke(48,22,8);
        //if dragged backwards line will become more thicker
        if (pointA.x<220){
                //determines the thickness of the line
                strokeWeight(7);
                //connects the bird to the slingshot on the left side
                line(pointA.x-25,pointA.y,pointB.x-10,pointB.y);
                //connects the bird to the right side of the slingshot
                line(pointA.x-25,pointA.y,pointB.x+30,pointB.y);
                //adds image of a base
                image(this.sling3,pointA.x-30,pointA.y-15,15,30);
        }
        else{
            strokeWeight(4);
            line(pointA.x-25,pointA.y,pointB.x-10,pointB.y);
            line(pointA.x-25,pointA.y,pointB.x+30,pointB.y);
            image(this.sling3,pointA.x-30,pointA.y-15,15,30);
        }
                //pops put the changes so that they don't leak to the other objects
                pop();
    }

        
 }    
}




