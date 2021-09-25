import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAOGOugykRgedLT3A4_3Y-0LH4Rd4B46c4",
  authDomain: "musicplayer-a3429.firebaseapp.com",
  projectId: "musicplayer-a3429",
  storageBucket: "musicplayer-a3429.appspot.com",
  messagingSenderId: "266419035875",
  appId: "1:266419035875:web:30f66c710e8dd28709efd6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  commentsCollection,
  songsCollection,
  storage,
  usersCollection,
};
