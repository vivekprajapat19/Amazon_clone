import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAcuwhjYbZey-lMu8T-CuW_bjDKi_D8m9o",
    authDomain: "challenge-d9b29.firebaseapp.com",
    projectId: "challenge-d9b29",
    storageBucket: "challenge-d9b29.appspot.com",
    messagingSenderId: "1089843327522",
    appId: "1:1089843327522:web:10b3961dbed514535e907b",
    measurementId: "G-HSS696DBC5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };