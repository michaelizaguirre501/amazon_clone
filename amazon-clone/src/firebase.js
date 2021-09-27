import firebase from "firebase";

const firebaseApp = firebase.initilizeApp({});

const db = firebaseApp.fireStore();
const auth = firebase.auth();

export { db, auth };
