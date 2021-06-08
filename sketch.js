var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var bike1,bike2,bikes;

function setup(){
  createCanvas(displayWidth,displayHeight)
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  bike1=createSprite(20,20,50,50)
  bike2=createSprite(50,50,50,50)

  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
drawSprite()