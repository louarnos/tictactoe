'use strict';

const findWin =  require('./findWin.js');
const game = require('./game-data.js');
const move = require('./make-move.js');
const updateApi = require('./update-game-api.js');
const ui = require('./ui.js');

const play = function ($currentBox) {
  if (game.playerOnesTurn) {
    move.makeMoveX($currentBox);
    findWin.findWinOrTie();
    updateApi.updateGame(ui.gameUpdateSuccess, ui.gameUpdateFailure, game.game.game.cells[$currentBox.data('square')], $currentBox.data('square'), (!game.inProgress));
  }else if ((!game.playerOnesTurn)) {
    move.makeMoveO($currentBox);
    findWin.findWinOrTie();
    updateApi.updateGame(ui.gameUpdateSuccess, ui.gameUpdateFailure, game.game.game.cells[$currentBox.data('square')], $currentBox.data('square'), (!game.inProgress));
  }
};

module.exports = {
  play,
};
