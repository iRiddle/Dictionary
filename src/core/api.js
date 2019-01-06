import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBilGba_kzt7qLSQoHJsuNSRiXmQjUKpzI",
  authDomain: "egg-dictionary.firebaseapp.com",
  databaseURL: "https://egg-dictionary.firebaseio.com",
  projectId: "egg-dictionary",
  storageBucket: "egg-dictionary.appspot.com",
  messagingSenderId: "475111448511"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
