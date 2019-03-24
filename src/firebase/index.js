import firebase from 'firebase';
import 'firebase/storage';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBTUUUYoUTeuPBuFh6sKq5WVT3UmmNE9bQ",
    authDomain: "prestamojuegos.firebaseapp.com",
    databaseURL: "https://prestamojuegos.firebaseio.com",
    projectId: "prestamojuegos",
    storageBucket: "prestamojuegos.appspot.com",
    messagingSenderId: "8718885378"
  };
  const Firebase = firebase.initializeApp(config);
  /*firebase.initializeApp(config);*/

  const storage = firebase.storage();

  export{
      storage, firebase as default 
  }