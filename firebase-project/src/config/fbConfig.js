  import  firebase from 'firebase';



  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  let firebaseConfig = {
    apiKey: "AIzaSyAzBFgV5bkW8iEjsafW1GbgCXkJQ7NL6j4",
    authDomain: "countryprojektzespoowy.firebaseapp.com",
    databaseURL: "https://countryprojektzespoowy.firebaseio.com",
    projectId: "countryprojektzespoowy",
    storageBucket: "countryprojektzespoowy.appspot.com",
    messagingSenderId: "859381229189",
    appId: "1:859381229189:web:7c558f3d3239289cdc6bec",
    measurementId: "G-NJ8V05DSN8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


//  console.log(firebase.database());

  export default firebase;