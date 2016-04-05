'use strict';

const app = require('./app-data.js');
const user1 = require('./user1.js');
const user2 = require('./user2.js');

const success = (data) => {
  console.log("YOU DID IT!!!!" , data);
};

const signInSuccessP1= (data) => {
  user1.user = data.user;
  console.log(user1);
};

const signInSuccessP2= (data) => {
  user2.user = data.user;
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signOutSuccessP1= () => {
  console.log(user1.user);
  user1.user= null;
  console.log(app , "Signed Out!");
};

const signOutSuccessP2= () => {
  user2.user = null;
  console.log(app , "Signed Out!");
};

module.exports = {
  failure,
  success,
  signInSuccessP1,
  signOutSuccessP1,
  signInSuccessP2,
  signOutSuccessP2,
};
