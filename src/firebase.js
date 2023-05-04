import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD-3r5IFMJ3nUZV-OEMcntEsjU0podmK6I",
  authDomain: "apni-dukaan-29374.firebaseapp.com",
  projectId: "apni-dukaan-29374",
  storageBucket: "apni-dukaan-29374.appspot.com",
  messagingSenderId: "1029915672036",
  appId: "1:1029915672036:web:527895fb3d11f34228dbf1",
  measurementId: "G-NZBMC5PH32"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};