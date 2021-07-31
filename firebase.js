import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";
import "@firebase/storage";

// Your web app's Firebase configuration, which you copy-pasted from Step 6
var firebaseConfig = {
  // CONFIG INFO GOES HERE
  apiKey: "AIzaSyDTtyYdus_SdkkPMiGOoeiRs0Y5dYeU_78",
  authDomain: "snapnourish.firebaseapp.com",
  projectId: "snapnourish",
  storageBucket: "snapnourish.appspot.com",
  messagingSenderId: "782461947563",
  appId: "1:782461947563:web:123930230b0f2ff1cdb1ee"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
let firestore = firebase.firestore();

export default firestore;
