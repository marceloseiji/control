import firebase from "firebase"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBS7oOoyMrq6CMi4md4OA_grZ6HyC6RPsM",
  authDomain: "control-70035.firebaseapp.com",
  databaseURL: "https://control-70035-default-rtdb.firebaseio.com",
  projectId: "control-70035",
  storageBucket: "control-70035.appspot.com",
  messagingSenderId: "899159858152",
  appId: "1:899159858152:web:c71639eb841fe03086225d",
  measurementId: "G-FSMLED977X",
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { database, googleAuthProvider, firebase }
