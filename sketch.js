const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;





function setup(){
    var canvas = createCanvas(900,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(450,700,1200,50);
    box1= new Box(600,600,70,70)
    box2= new Box(630,600,70,70)
    box3= new Box(660,600,70,70)
    box4= new Box(600,650,70,70)
    box5= new Box(630,650,70,70)
    box6= new Box(660,650,70,70)
    box7= new Box(600,500,70,70)
    box8= new Box(630,500,70,70)
    box9= new Box(660,500,70,70)
}

function draw(){
    background ("black")
    
        
    
    Engine.update(engine);
    //strokeWeight(4);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
}

