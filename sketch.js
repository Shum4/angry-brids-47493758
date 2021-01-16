// //examples of different data types in javascript


// //string
// var a ="string";
// console.log(a);

// //number
// var b =1;
// console.log(b);

// //boollean
// var c =true;
// console.log(c);

// //undefined
// var d;

// //null
// d = null;
// console.log(d);

// //examples of arrays 

// //array storing same data type
// var arr1 = [1,32,45,6,4,6546]
// var arr2 = ["a","b","c","d"];
//  //var arr = [value0,value1,value2,value3]

// //array storing different data type
// var arr3 = ["Shammim",13,"Canada","blue",true];
// console.log(arr3[0]);
// console.log(arr3);

// var arr4 = [[1,2],[2,3],[3,4],[3,4]];
// console.log(arr4[0]);//[1,2]
// console.log(arr4[3]);
// console.log(arr4[0][1]);//2


// arr4.push("Shammim");
// console.log(arr4);
// arr4.pop();
// console.log(arr4);
//namespacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//making global variables
var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2,pig3;
var log1,log3,log4,log5;
var bird;
var backgroundImage;
var platform;
var slingshot;
var gameState="onSling";

function preload(){
    //loading the background image
    backgroundImage=loadImage("sprites/bg.png");
}


function setup(){

    //making the canvas
    var canvas = createCanvas(1200,400);
    //making the engine and world
    engine = Engine.create();
    world = engine.world;

    //making the ground and platform
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150,300,300,170);

    //making pigs, boxes and logs using the classes
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    //making the bird also using a class
    bird = new Bird(200,50);

    //making a slingshot
    slingshot=new Slingshot(bird.body,{x:200,y:50});

}

function draw(){
    //applying the background
    background(backgroundImage);

    //updates everything without pressing the reload button
    Engine.update(engine);
    // console.log(box2.body.position.x);
    // console.log(box2.body.position.y);
    // console.log(box2.body.angle);
    
    //displays everything
    box1.display();
    box2.display();
    ground.display();
    platform.display();

    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    
    bird.display();
    
    slingshot.display();

   
}

//to drag the bird backwards when mouse is pressed
function mouseDragged(){
    if (gameState !=="launched"){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
    }
}

//to make the bird fly when mouse is released
function mouseReleased(){
    //calling fly() from the slingshot class
    slingshot.fly();
    gameState= "launched";
}

//when the space key is pressed the bird goes back to the slingshot
function keyPressed(){
    if(keyCode===32){
        //slingshot.attach(bird.body)
    }
}
