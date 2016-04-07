'use strict';

const game = require('./game-data.js');
const user1 = require('../auth/user1.js');
const user2 = require('../auth/user2.js');

const findWinOrTie = function () {
  let win = false;
  let tie = false;
  let winner;
  if ((game.game.game.cells[0] !== '') && game.game.game.cells[0] === game.game.game.cells[1] && game.game.game.cells[1] === game.game.game.cells[2]) {
    win = true;
    winner = game.game.game.cells[0];
  }else if ((game.game.game.cells[3] !== '') && game.game.game.cells[3] === game.game.game.cells[4] && game.game.game.cells[4] === game.game.game.cells[5]) {
    win = true;
    winner = game.game.game.cells[3];
  }else if ((game.game.game.cells[6] !== '') && game.game.game.cells[6] === game.game.game.cells[7] && game.game.game.cells[7] === game.game.game.cells[8]) {
    win = true;
    winner = game.game.game.cells[6];
  }else if ((game.game.game.cells[0] !== '') && game.game.game.cells[0] === game.game.game.cells[4] && game.game.game.cells[4] === game.game.game.cells[8]) {
    win = true;
    winner = game.game.game.cells[0];
  }else if ((game.game.game.cells[2] !== '') && game.game.game.cells[2] === game.game.game.cells[4] && game.game.game.cells[4] === game.game.game.cells[6]) {
    win = true;
    winner = game.game.game.cells[2];
  }else if ((game.game.game.cells[2] !== '') && game.game.game.cells[2] === game.game.game.cells[5] && game.game.game.cells[5] === game.game.game.cells[8]) {
    win = true;
    winner = game.game.game.cells[2];
  }else if ((game.game.game.cells[1] !== '') && game.game.game.cells[1] === game.game.game.cells[4] && game.game.game.cells[4] === game.game.game.cells[7]) {
    win = true;
    winner = game.game.game.cells[1];
  }else if ((game.game.game.cells[0] !== '') && game.game.game.cells[0] === game.game.game.cells[3] && game.game.game.cells[3] === game.game.game.cells[6]) {
    win = true;
    winner = game.game.game.cells[0];
  }else if (game.moveCount >= 9) {
    tie = true;
  }

  if (win) {
    $('.title').text(' ' + winner + ' Wins!!!!!');
    game.inProgress = false;
    game.moveCount = 0;
    if (winner === 'x') {
      user1.wins += 1;
      console.log(user1.wins, user2.wins);
    }else {
      user2.wins += 1;
    }

    $('.score-p1').text('Player 1: ' + user1.wins);
    $('.score-p2').text('Player 2: ' + user2.wins);
  }else if (tie) {
    $('.title').text('Its a Tie!');
    game.inProgress = false;
    game.moveCount = 0;
  }
};

module.exports = {
  findWinOrTie,
};
