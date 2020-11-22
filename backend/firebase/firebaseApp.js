const firebase = require("firebase-admin");
//const firebaseConfig = require("./firebaseConfig.js");
var serviceAccount = require("./serviceAccountKey.json");


firebase.initializeApp({
	credential: firebase.credential.cert(serviceAccount)
});

const db = firebase.firestore();
const auth = firebase.auth()

module.exports = {db,auth}