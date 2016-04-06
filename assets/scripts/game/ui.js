'use strict';

const game = require('./game-data.js');

const gameCreationSuccess = (data) => {
  game.game = data;
  console.log('YOU DID IT!!!!', game.game.game);
};

const gameCreationFailure = (data) => {
  console.log('fail', data);
};

const gameUpdateSuccess = (data) => {
  console.log('Update Worked', data);
};

const gameUpdateFailure = (data) => {
  console.log('Game Update Failed', data);
};

module.exports = {
  gameCreationFailure,
  gameCreationSuccess,
  gameUpdateSuccess,
  gameUpdateFailure,
};
