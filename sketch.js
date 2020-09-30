var ball;
var database;
var game;
function setup(){
    database=firebase.database();
    createCanvas(500,500);
var gameState=0;
    game=new Game();
    game.getState();
    game.start();
    
}

function draw(){
    background("white");
   
}
