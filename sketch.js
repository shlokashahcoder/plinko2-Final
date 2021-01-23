const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var particles = [];
var plinkos = [];
var divisions = []
var turn = 0
var gameState = "play";
var particle
var turn = 0
var divisionHeight=250;
var score =0;


function setup() {
  createCanvas(800, 580);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

   
}
 

function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   fill("white")
   //line(100,400,500,410)

   textSize(30)
   text("Turn:"+turn,80,40)

   
  if (particle != null)
  {
    particle.display(); 
    if (particle.body.position.y>500)
    {
      if(particle.body.position.x<80)
      {

        score = score + 100;
        particle = null;
      }
      else if (particle.body.position.x<160)
      {
        score = score + 300;
        particle = null;
      }
      else if (particle.body.position.x<240)
      {
        score = score + 500;
        particle = null;
      }
      else if (particle.body.position.x<320)
      {
        score = score + 100;
        particle = null;
      }
      else if (particle.body.position.x<400)
      {
        score = score + 130;
        particle = null;
      }
      else if (particle.body.position.x<480)
      {
        score = score + 100;
        particle = null;
      }
      else if (particle.body.position.x<560)
      {
        score = score + 100;
        particle = null;
      }
      else if (particle.body.position.x<640)
      {
        score = score + 210;
        particle = null;
      }
      else if (particle.body.position.x<720)
      {
        score = score + 400;
        particle = null;
      }
      else if (particle.body.position.x<800)
      {
        score = score + 500;
        particle = null;
      }
    }
  }

  if(turn===5){
    gameState = "end"
    fill("white")
    textSize(40)
    text("GameOver",300,300)
  }
  
   text("SCORE:"+score,500,40)
   text("100",20,550)
   text("300",100,550)
   text("500",180,550)
   text("100",260,550)
   text("130",340,550)
   text("100",420,550)
   text("100",500,550)
   text("210",580,550)
   text("400",660,550)
   text("500",740,550)

  }

function mousePressed() {
  if(gameState!=="end" ){
    turn++;
    particle = new Particle(mouseX,10,10,10)
  }
}
