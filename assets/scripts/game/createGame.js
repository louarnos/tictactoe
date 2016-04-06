'use strict'

const user1 = require('../auth/user1.js')

const createGame = (success,failure) =>{
  $.ajax({
    method: "POST",
    url: 'http://tic-tac-toe.wdibos.com/' + 'games',
    headers: {
      Authorization: 'Token token=' + user1.user.token
    },
  })
  .done(success)
  .fail(failure);
}



module.exports = {
  createGame,
}
