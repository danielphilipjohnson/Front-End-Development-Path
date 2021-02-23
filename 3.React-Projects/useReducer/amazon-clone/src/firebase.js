import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA6N9VQ3ONpYYSuZZDOjy7S10jvM3nAVrI",
  authDomain: "clone-f6aa7.firebaseapp.com",
  databaseURL: "https://clone-f6aa7.firebaseio.com",
  projectId: "clone-f6aa7",
  storageBucket: "clone-f6aa7.appspot.com",
  messagingSenderId: "782901146184",
  appId: "1:782901146184:web:5663d6ddb89c5bc7455e7d",
  measurementId: "G-3LSY1W09H5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };