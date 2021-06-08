class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    bike1=createSprite(100,300)
    bike2=createSprite(400,300)
    bikes=[bike1,bike2]
  }

  play(){
   
   
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      var index = 0

      var x = 0
      var y

      for(var plr in allPlayers){
     index = index+1

     x = x+200
     y =  displayHeight - allPlayers[plr].distance

     bikes[index-1].x = x
     bikes[index-1].y = y

     if(index === player.index){
       fill("red")
       camera.position.x = displayWidth/2
       camera.position.y = bikes[index-1].y
     }
     else{
       fill("black")
     }
    
     textSize(20);
     text(allPlayers[plr].name + ": " + allPlayers[plr].distance,displayWidth/2,displayHeight-20)
  }
}
  }
}
