'use strict';

const createGame = require('./createGame.js')
const ui = require('./ui.js');

let playerOnesTurn = true;

const addHandlers = () => {
  $('.box').on('click', function(event){
    if(true){
    }else{
      $('h3').show('slow');
    }
  });
  $('#start-game').on('submit', function(event){
    event.preventDefault();
    debugger;
    createGame.createGame(ui.gameCreationSuccess,ui.gameCreationFailure);
  });
}


module.exports = {
  addHandlers,
};
