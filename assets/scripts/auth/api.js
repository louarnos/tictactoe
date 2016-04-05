'use strict'

const app = require('./app-data.js');
const user1 = require('./user1.js');
const user2 = require('./user2.js');

const signUp = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: 'http://tic-tac-toe.wdibos.com/' + 'sign-up',
    data,
  })
  .done(success)
  .fail(failure);
};

const signIn = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: 'http://tic-tac-toe.wdibos.com/' + 'sign-in',
    data,
  })
  .done(success)
  .fail(failure);
};

const signOutP1 =(success, failure) =>{
  $.ajax({
    method: "DELETE",
    url: 'http://tic-tac-toe.wdibos.com/' + 'sign-out/' + user1.user.id,
    headers: {
      Authorization: 'Token token=' + user1.user.token
    },
  })
  .done(success)
  .fail(failure);
};

const signOutP2 =(success, failure) =>{
  $.ajax({
    method: "DELETE",
    url: 'http://tic-tac-toe.wdibos.com/' + 'sign-out/' + user2.user.id,
    headers: {
      Authorization: 'Token token=' + user2.user.token
    },
  })
  .done(success)
  .fail(failure);
};


module.exports = {
  signUp,
  signIn,
  signOutP1,
  signOutP2,
};
