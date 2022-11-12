// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwWNLurnajTkWAOTHEM-QMHA-OPPpy8ts",
  authDomain: "hot100-5bf8c.firebaseapp.com",
  projectId: "hot100-5bf8c",
  storageBucket: "hot100-5bf8c.appspot.com",
  messagingSenderId: "211934771887",
  appId: "1:211934771887:web:e7592d303b192fc112f25a",
  measurementId: "G-GFG7KR9FC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
