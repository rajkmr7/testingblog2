import firebase from 'firebase';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AtttttttyyyyyyyyyyyyffffffffffffFI",
  authDomain: "blgggggggggggg-developed.firebaseapp.com",
  projectId: "bloffffffffffffffe-developed",
  storageBucket: "blggggggggggge-developed.appspot.com",
  messagingSenderId: "60888888888882",
  appId: "1:655555555722:web:0ftttt71egggg93b",
  // measurementId: "G-BTggggKXX"
};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
// const db = getFirestore(app);
 
export default db;


