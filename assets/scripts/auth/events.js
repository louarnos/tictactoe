'use strict'

const authApi = require('./api.js');
const authUi = require('./ui.js');


const addHandlers = () => {
  $('#sign-up').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signUp(authUi.success, authUi.failure, data);
  });
  $('#sign-in-p1').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signIn(authUi.signInSuccessP1, authUi.failure, data);
  });
  $('#sign-in-p2').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signIn(authUi.signInSuccessP2, authUi.failure, data);
  });
  $('#sign-out-p1').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signOutP1(authUi.signOutSuccessP1, authUi.failure, data);
  });
  $('#sign-out-p2').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signOutP2(authUi.signOutSuccessP2, authUi.failure, data);
  });
};

module.exports = {
  addHandlers,
};
