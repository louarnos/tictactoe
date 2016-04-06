'use strict';

const createGame = require('./createGame.js');
const ui = require('./ui.js');
const user1 = require('../auth/user1.js');
const play = require('./game-play.js');

const addHandlers = () => {
  $('.box').on('click', function (event) {
    event.preventDefault();
    if (user1.user) {
      play.play();
    }else {
      $('h3').css('visibility', 'visible');
      setTimeout(function () {
        $('h3').css('visibility', 'hidden');
      }, 1000);
    }
  });
  $('#start-game').on('submit', function (event) {
    event.preventDefault();
    createGame.createGame(ui.gameCreationSuccess, ui.gameCreationFailure);
  });
};

module.exports = {
  addHandlers,
};
