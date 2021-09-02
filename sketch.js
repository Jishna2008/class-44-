var form,game;
var database,gameState,playerCount;


function setup(){
    
var canvas= createCanvas(1200,600);
database=firebase.database();
game=new Game();
game.getState();
//game.updateState();
// form=new Form();
// form.display();
}
function draw(){
    background("white");
    //console.log(gameState);
//    game.display();
if(gameState===0){
    game.start();
}
}