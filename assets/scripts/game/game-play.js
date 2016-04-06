'use strict'

const findWin =  require('./findWin.js');
const game = require('./game-data.js')

const play = () => {
  while((!findWin(game.game.cells))||(game.moveCount<9)){
    $('.00').on('click', function(){
      event.preventDefault();
      if(not marked||playerOnesTurn){
        $('.00.p').val('x')
        // update game state
        game.game.cells[0] = 'x'
        game.playerOnesTurn = (!game.playerOnesTurn);
        game.moveCount +=1;
      }else if (not marked) {
        $('.00.p').val('o')
        //update game state
        game.game.cells[0] = 'o'
        game.playerOnesTurn = (!game.playerOnesTurn);
        game.moveCount +=1;
      }
    });

  }
}
