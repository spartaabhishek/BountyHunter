import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDMf90pKmF2GBjJV2zro_vAFvqA6c1G3ZI",
    authDomain: "unihack-27ee8.firebaseapp.com",
    databaseURL: "https://unihack-27ee8.firebaseio.com",
    projectId: "unihack-27ee8",
    storageBucket: "unihack-27ee8.appspot.com",
    messagingSenderId: "1098532334482",
    appId: "1:1098532334482:web:aa8cb1a0588e00c5072f4b",
    measurementId: "G-X6H5ES4T20"
  };

firebase.initializeApp(config);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

const auth = firebase.auth()
export default auth;
