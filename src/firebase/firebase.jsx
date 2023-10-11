// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDizFu1nnmvD5CDTgWs9zyeIImbbljRF_k",
  authDomain: "gaming-store-503cc.firebaseapp.com",
  databaseURL: "https://gaming-store-503cc-default-rtdb.firebaseio.com/",
  projectId: "gaming-store-503cc",
  storageBucket: "gaming-store-503cc.appspot.com",
  messagingSenderId: "834624323705",
  appId: "1:834624323705:web:5b4dc0f1e77037e10fd4a8",
  measurementId: "G-59EY57LNGZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);