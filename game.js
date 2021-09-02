 class Game{
     constructor(){}
     getState(){
       var  gameStateRef =database.ref('gameState');
        gameStateRef.on("value",function(data){gameState=data.val()});
       
 }
 display(){
  console.log(gameState);
 }
  updateState(){
    database.ref('/').update({gameState:gameState})
  }
  start(){
    form=new Form();
    form.display();
  }
}