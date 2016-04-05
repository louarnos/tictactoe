'use strict'

const game = require('./game-data.js');


const gameCreationSuccess = (data) => {
  console.log("YOU DID IT!!!!" , data);
  game.game = data;
};

const gameCreationFailure = (data) => {
  console.log("fail", data);
}

module.exports = {
  gameCreationFailure,
  gameCreationSuccess,
}
