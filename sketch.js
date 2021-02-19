var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,600);

    //create 4 different surfaces

ball = createSprite(random(20, 750), 20, 50);

box1 = createSprite(70, 600, 150, 20);
box1.shapeColor = "blue"

box2 = createSprite(230, 600, 150, 20);
box2.shapeColor = "yellow"

box3 = createSprite(390, 600, 150, 20);
box3.shapeColor = "red"

box4 = createSprite(550, 600, 150, 20);
box4.shapeColor = "green"

edges = createEdgeSprites()

ball.velocityY = 5;
ball.velocityX = -5;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite



ball.bounceOff(edges[0])
ball.bounceOff(edges[1])
ball.bounceOff(edges[2])
//ball.bounceOff(box1)
//ball.collide(box2);
//ball.bounceOff(box3)
//ball.bounceOff(box4)






if(ball.isTouching(box1)) {

    ball.shapeColor = "blue"
    ball.velocityY = -5
    ball.velocityX = -5
    music.play();

}

if(ball.isTouching(box2)) {
 
    ball.shapeColor = "yellow"
    ball.velocityY = 0
    ball.velocityX = 0
    music.stop()

}

if(ball.isTouching(box3)) {

ball.shapeColor = "red"

ball.velocityY = -5
    ball.velocityX = 5

}

if(ball.isTouching(box4)) {

   ball.shapeColor = "green"

   ball.velocityY = -5
    ball.velocityX = 5
}


drawSprites();

    //add condition to check if box touching surface and make it box
}
