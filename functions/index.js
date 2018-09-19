let functions = require('firebase-functions');
let admin = require('firebase-admin');

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
admin.initializeApp(functions.config().firebase);

exports.getAllUsers = functions.https.onRequest((req, res) => {
  return admin.auth().listUsers()
    .then(function(results) {
      return results;
    });
});
