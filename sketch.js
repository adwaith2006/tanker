const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var base,ground,head;

function preload(){
base=loadImage("assets/images.png");
}

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
    base=new Base(200,200,50,30);
    head=new Head(220,230,20,20);
    ground=new ground(200,320,400,90);
    

}

function draw() {
background("yellow");
Engine.update(engine);
base.display();
head.display();
ground.display();
}


