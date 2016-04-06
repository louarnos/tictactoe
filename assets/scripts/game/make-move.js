'use strict';

const game = require('./game-data.js');

const makeMoveX = (currentBox) => {
  currentBox.text('x').addClass('marked');
  game.game.game.cells[currentBox.data('square')] = 'x';
  game.playerOnesTurn = false;
  game.moveCount += 1;
  console.log(game.game.game.cells);
};

const makeMoveO = (currentBox) => {
  currentBox.text('o').addClass('marked');
  game.game.game.cells[currentBox.data('square')] = 'o';
  game.playerOnesTurn = true;
  game.moveCount += 1;
  console.log(game.game.game.cells);
};

module.exports = {
  makeMoveO,
  makeMoveX,
};
