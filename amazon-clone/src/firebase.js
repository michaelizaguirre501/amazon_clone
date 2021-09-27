import firebase from "firebase";

const firebaseApp = firebase.initilizeApp({
  apiKey: "AIzaSyDAc5q-GF-t86LchAoYs0Szt8b-WPRKJs0",
  authDomain: "clone-82c02.firebaseapp.com",
  projectId: "clone-82c02",
  storageBucket: "clone-82c02.appspot.com",
  messagingSenderId: "722513461884",
  appId: "1:722513461884:web:97ebc6386a9c296a97fff9",
  measurementId: "G-CY2R7YWLXG",
});

const db = firebaseApp.fireStore();
const auth = firebase.auth();

export { db, auth };
//check 2
