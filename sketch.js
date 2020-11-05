
var database;
var gameState = 0;
var playerCount;
var form,game,player;
var allPlayer;
var car1,car2,car3,car4;

var car1img , car2img , car3img , car4img;
var track , ground;


var cars;

function preload(){

    car1img = loadImage("images/car1.png");
    car2img = loadImage("images/car2.png");
    car3img = loadImage("images/car3.png");
    car4img = loadImage("images/car4.png");
    ground = loadImage("images/ground.png");
    track = loadImage("images/track.jpg");

  
  }

function setup(){
    createCanvas(windowWidth-70,windowHeight-70);
    
   database = firebase.database();

    game = new Game();
    
    game.getState();

    game.start();


}

function draw(){
    

if(playerCount == 4 && gameState === 0){

    game.updateState(1);
}
    
if( gameState == 1){

    background(ground);
    image(track,0,-4*windowHeight,windowWidth,5*windowHeight);
    game.play();
    drawSprites();
}
if( gameState === 2){

    game.end();

}

}