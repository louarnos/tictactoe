'use strict';

const findWin =  require('./findWin.js');
const game = require('./game-data.js');
const move = require('./make-move.js');

const play = () => {
  $('.box').on('click', function () {
    event.preventDefault();
    let $currentBox = $(this);
    if (game.playerOnesTurn) {
      move.makeMoveX($currentBox);
    }else {
      move.makeMoveO($currentBox);
    }
  });
};

module.exports = {
  play,
};
