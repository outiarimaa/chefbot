  // Initialize Firebase
  import firebase from 'firebase';
  var config = {
    apiKey: "AIzaSyBpFgdFkPQmPbkO6UbaoFJeGd8K-eZAnDA",
    authDomain: "chefbot-e4503.firebaseapp.com",
    databaseURL: "https://chefbot-e4503.firebaseio.com",
    projectId: "chefbot-e4503",
    storageBucket: "chefbot-e4503.appspot.com",
    messagingSenderId: "606038427583"
  };

  firebase.initializeApp(config);
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  export const facebookProvider = new firebase.auth.FacebookAuthProvider();
  export const auth = firebase.auth();
  export default firebase;



