const functions = require('firebase-functions');
const admin = require('firebase-admin');

const serviceAccount = require("accountability-d30a5-firebase-adminsdk-mvui5-51c09bfef8.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://accountability-d30a5.firebaseio.com"
});

function listAllUsers() {
  
  admin.auth().listUsers()
    .then(function(listUsersResult) {
      listUsersResult.users.forEach(function(userRecord) {
        console.log("user", userRecord.toJSON());
      });     
    })
    .catch(function(error) {
      console.log("Error listing users:", error);
    });
}

// exports.getAllUsers = functions.https.onRequest((req, res) => {
  // return admin.auth().listUsers()
    // .then(function(results) {
      // return results;
    // });
// });
