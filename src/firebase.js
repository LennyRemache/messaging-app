// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_I3vqfDbXfbKdH8O3On8hcXZ6CZUxcww",
  authDomain: "messaging-app-5f014.firebaseapp.com",
  projectId: "messaging-app-5f014",
  storageBucket: "messaging-app-5f014.appspot.com",
  messagingSenderId: "893428232560",
  appId: "1:893428232560:web:025fed1fe983475024dfb5",
  measurementId: "G-63L3G7T6KL",
};

// get firebase app and initialize firebase app with the firebase config
const app = initializeApp(firebaseConfig);

// grab the database
const db = getFirestore();

// authentification
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
