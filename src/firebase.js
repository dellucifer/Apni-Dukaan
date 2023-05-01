// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-3r5IFMJ3nUZV-OEMcntEsjU0podmK6I",
  authDomain: "apni-dukaan-29374.firebaseapp.com",
  projectId: "apni-dukaan-29374",
  storageBucket: "apni-dukaan-29374.appspot.com",
  messagingSenderId: "1029915672036",
  appId: "1:1029915672036:web:527895fb3d11f34228dbf1",
  measurementId: "G-NZBMC5PH32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);