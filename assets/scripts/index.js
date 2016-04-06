'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
const authEvents = require('./auth/events.js');
const user1 = require('./auth/user1.js');
const gameEvents = require('./game/events.js');
const ui = require('./game/ui.js');

// On document ready
$(() => {
  authEvents.addHandlers();
  gameEvents.addHandlers();

});
