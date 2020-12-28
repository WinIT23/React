import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var config = {
  apiKey: "AIzaSyBEITktZeNwJjVvU1vFAZEltri74o6q2BU",
  authDomain: "vinit-marioplan.firebaseapp.com",
  projectId: "vinit-marioplan",
  storageBucket: "vinit-marioplan.appspot.com",
  messagingSenderId: "156882411659",
  appId: "1:156882411659:web:38eb3dd2c6213b7fabf48e",
  measurementId: "G-N2RJSHD9QB"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;