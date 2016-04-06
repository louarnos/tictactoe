'use strict';

const game = require('./game-data.js');

const findWinOrTie = function () {
  let win = false;
  let tie = false;
  let winner;
  if (((typeof game.game.game.cells[0]) !== 'undefined') && game.game.game.cells[0] === game.game.game.cells[1] && game.game.game.cells[1] === game.game.game.cells[2]) {
    win = true;
    winner = game.game.game.cells[0];
  }else if (((typeof game.game.game.cells[3]) !== 'undefined') && game.game.game.cells[3] === game.game.game.cells[4] && game.game.game.cells[4] === game.game.game.cells[5]) {
    win = true;
    winner = game.game.game.cells[3];
  }else if (((typeof game.game.game.cells[6]) !== 'undefined') && game.game.game.cells[6] === game.game.game.cells[7] && game.game.game.cells[7] === game.game.game.cells[8]) {
    win = true;
    winner = game.game.game.cells[6];
  }else if (((typeof game.game.game.cells[0]) !== 'undefined') && game.game.game.cells[0] === game.game.game.cells[4] && game.game.game.cells[4] === game.game.game.cells[8]) {
    win = true;
    winner = game.game.game.cells[0];
  }else if (((typeof game.game.game.cells[2]) !== 'undefined') && game.game.game.cells[2] === game.game.game.cells[4] && game.game.game.cells[4] === game.game.game.cells[6]) {
    win = true;
    winner = game.game.game.cells[2];
  }else if (game.moveCount >= 9) {
    tie = true;
  }

  if (win) {
    console.log(winner + ' wins!!!');
  }else if (tie) {
    console.log('Its a tie!!!');
  }

};

module.exports = {
  findWinOrTie,
};
