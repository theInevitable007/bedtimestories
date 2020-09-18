import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAM5AkSJeBTyVjvE1w3tLoBaXAcHvxuI6w",
  authDomain: "bedtimestory-4b4e0.firebaseapp.com",
  databaseURL: "https://bedtimestory-4b4e0.firebaseio.com",
  projectId: "bedtimestory-4b4e0",
  storageBucket: "bedtimestory-4b4e0.appspot.com",
  messagingSenderId: "561952829212",
  appId: "1:561952829212:web:6280ec3df78be8c46614d9"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   