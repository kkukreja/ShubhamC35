class Game
{
    constructor(){

    }

    getState(){
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState=data.val();
            console.log("gameeeeeeeeee"+gameState);
        })

        
    }
    updateState(state)
    {
        database.ref('/').update({
            gameState:state
        })
    }

    start()
    {
        console.log("HEllo");
    }
}