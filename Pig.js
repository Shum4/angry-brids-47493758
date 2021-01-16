class Pig extends BaseClass {
    constructor(x, y) {
     super(x,y,50,50);
     this.image=loadImage("sprites/enemy.png");
     this.visiblity=255;
    }
    display(){
      //puts the speed of the pig into the console
     // console.log(this.body.speed)
      if(this.body.speed<3){
        super.display();
        
      }
      else{
        //removes bird from world 
        World.remove(world,this.body);
        push();
        //makes the pigs visibility go
        this.visiblity=this.visiblity-5;
        //tints the image of the pig
        tint(255,this.visiblity)
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
      }
     // 0 complete off (00000000)
     //255 is complete on (11111111)
     //binary digits = 0's and 1's
     //1 unit of memory is = 1 byte = 8 bits
    //ASCII - American Standard Code for Information Interchange
    }
  };
  

  