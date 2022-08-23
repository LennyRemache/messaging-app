// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

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
const app = firebase.initializeApp(firebaseConfig);

// grab the database
const db = app.firestore();

// authentification
const auth = getAuth(app);
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
