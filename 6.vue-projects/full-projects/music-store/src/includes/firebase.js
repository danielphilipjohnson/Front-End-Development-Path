import firebase from "firebase/app";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyAOGOugykRgedLT3A4_3Y-0LH4Rd4B46c4",
  authDomain: "musicplayer-a3429.firebaseapp.com",
  projectId: "musicplayer-a3429",
  storageBucket: "musicplayer-a3429.appspot.com",
  messagingSenderId: "266419035875",
  appId: "1:266419035875:web:30f66c710e8dd28709efd6",
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
