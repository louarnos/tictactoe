'use strict';

const game = require('./game-data.js');

const makeMoveX = (currentBox) => {
  currentBox.text('x').addClass('marked');
  game.game.game.cells[currentBox.data('square')] = 'x';
  game.playerOnesTurn = false;
  game.moveCount += 1;
  debugger;
};

const makeMoveO = (currentBox) => {
  currentBox.text('o').addClass('marked');
  game.game.game.cells[currentBox.data('square')] = 'o';
  game.playerOnesTurn = true;
  game.moveCount += 1;
};

module.exports = {
  makeMoveO,
  makeMoveX,
};
