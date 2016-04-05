'use strict'


const createGame = (success,failure) =>{
  $.ajax({
    method: "POST",
    url: 'http://tic-tac-toe.wdibos.com/' + 'games',
  })
}



module.exports = {
  createGame,
}
