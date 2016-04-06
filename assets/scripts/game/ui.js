'use strict';

const game = require('./game-data.js');

const gameCreationSuccess = (data) => {
  game.game = data;
  console.log('YOU DID IT!!!!', game.game.game.cells);
};

const gameCreationFailure = (data) => {
  console.log('fail', data);
};

module.exports = {
  gameCreationFailure,
  gameCreationSuccess,
};
