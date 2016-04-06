'use strict';

const findWin =  require('./findWin.js');
const game = require('./game-data.js');
const move = require('./make-move.js');
const updateApi = require('./update-game-api.js');
const ui = require('./ui.js');

const play = function ($currentBox) {
  if (game.playerOnesTurn) {
    move.makeMoveX($currentBox);
    updateApi.updateGame(ui.gameUpdateSuccess, ui.gameUpdateFailure, game.game.game.cells[$currentBox.data('square')], $currentBox.data('square'));
    findWin.findWinOrTie();
  }else if ((!game.playerOnesTurn)) {
    move.makeMoveO($currentBox);
    updateApi.updateGame(ui.gameUpdateSuccess, ui.gameUpdateFailure, game.game.game.cells[$currentBox.data('square')], $currentBox.data('square'));
    findWin.findWinOrTie();
  }
};

module.exports = {
  play,
};
