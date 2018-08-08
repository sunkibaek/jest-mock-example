const firebase = require("firebase");

const config = {
  apiKey: "apiKey",
  authDomain: "projectId.firebaseapp.com",
  databaseURL: "https://databaseName.firebaseio.com",
  storageBucket: "bucket.appspot.com"
};

function start() {
  firebase.initializeApp(config);

  return true;
}

function somethingElse() {
  firebase.initializeApp.start();

  return true;
}

module.exports = start;
module.exports.somethingElse = somethingElse;
