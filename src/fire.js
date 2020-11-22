import firebase from 'firebase';
    
    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBzaMgQyN09V3oruKPLrA1VShfGGuGu12Y",
    authDomain: "react-and-firebase-login.firebaseapp.com",
    databaseURL: "https://react-and-firebase-login.firebaseio.com",
    projectId: "react-and-firebase-login",
    storageBucket: "react-and-firebase-login.appspot.com",
    messagingSenderId: "631663156466",
    appId: "1:631663156466:web:b34d2221c3f04dd64e846b"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
