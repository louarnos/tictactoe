'use strict';

const findWin =  require('./findWin.js');
const game = require('./game-data.js');
const move = require('./make-move.js');

const play = function ($currentBox) {
  if (game.playerOnesTurn) {
    move.makeMoveX($currentBox);
  }else if ((!game.playerOnesTurn)) {
    move.makeMoveO($currentBox);
  }
};

module.exports = {
  play,
};
