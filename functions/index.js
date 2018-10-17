const functions = require('firebase-functions');
const admin = require('firebase-admin');

const serviceAccount = require("accountability-d30a5-firebase-adminsdk-mvui5-51c09bfef8.json");	//This file needs to be in the same directory

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://accountability-d30a5.firebaseio.com"
});

function listAllUsers() {  	//This was taken almost directly from the documentation so it should work. 
							//It needs to be exported and injected.
  admin.auth().listUsers()
    .then(function(listUsersResult) {
      listUsersResult.users.forEach(function(userRecord) {	//This get called an error by the compiler.
        console.log("user", userRecord.toJSON());				//I think it is because it isn't returning the promise.
      });     
    })
    .catch(function(error) {
      console.log("Error listing users:", error);
    });
}

// exports.getAllUsers = functions.https.onRequest((req, res) => {    	//This is what Zach did. 
  // return admin.auth().listUsers()									//He said it did not work, but not how it failed
    // .then(function(results) {
      // return results;
    // });

