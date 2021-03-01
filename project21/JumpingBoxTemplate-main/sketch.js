var canvas;
var music;
var surface1,surface2,surface3,surface4,ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    surface1=createSprite();
    surface2=createSprite(random(20,750));
    surface3=createSprite(random(20,750));
    surface4=createSprite(random(20,750));
    ball=createSprite(random(20,750));

    surface1=shapeColor("blue");
    surface2=shapeColor("orange");
    surface3=shapeColor("red");
    surface4=shapeColor("green");

    ball=shapeColor("white");
    ball.velocityX=-5;



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    
   edges= createEdgeSprites();
   surface1.collide(edges);
   surface2.collide(edges);
   surface3.collide(edges);
   surface4.collide(edges);

    ball.bounceOff(edges);
    drawSprites();
}


createSprite(random(20,750));

if(block2.isTouching(ball)){
    ball.shapeColor=rgb(255,128,0);
    ball.velocityX=0;
    music.stop();
}

if(surface1.isTouching(ball)&&ball.bounceOff(surface1)){}