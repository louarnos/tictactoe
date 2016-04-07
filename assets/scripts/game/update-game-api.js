'use strict';

const user1 = require('../auth/user1.js');
const game = require('./game-data.js');

const updateGame = (success, failure, value, index, over) => {
  $.ajax({
    method: 'PATCH',
    url: 'http://tic-tac-toe.wdibos.com/' + 'games/' + game.game.game.id,
    data: {
      "game": {
        "cell": {
          "index": index,
          "value": value,
        },
        "over": over,
      },
    },
    headers: {
      Authorization: 'Token token=' + user1.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

module.exports = {
  updateGame,
};
