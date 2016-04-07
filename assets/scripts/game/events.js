'use strict';

const createGame = require('./createGame.js');
const ui = require('./ui.js');
const user1 = require('../auth/user1.js');
const play = require('./game-play.js');
const game = require('./game-data.js');

const addHandlers = () => {
  $('.box').on('click', function (event) {
    event.preventDefault();
    if (user1.user && (!$(this).hasClass('marked')) && game.inProgress) {
      let $currentBox = $(this);
      play.play($currentBox);
    }else if (!user1.user) {
      $('h3').css('visibility', 'visible');
      setTimeout(function () {
        $('h3').css('visibility', 'hidden');
      }, 1000);
    }
  });

  $('#start-game').on('submit', function (event) {
    event.preventDefault();
    if (user1.user && (!game.inProgress)) {
      $('.board .marked').removeClass('marked');
      $('.box').text('');
      $('.title').text('Tic Tac Toe');
      createGame.createGame(ui.gameCreationSuccess, ui.gameCreationFailure);
      game.inProgress = true;
    }else {
      $('h3').css('visibility', 'visible');
      setTimeout(function () {
        $('h3').css('visibility', 'hidden');
      }, 1000);
    }
  });
};

module.exports = {
  addHandlers,
};
