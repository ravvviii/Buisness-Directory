// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbLUddl4BsdkMNHhPzWn47bxtImUk2KGk",
  authDomain: "buisness-listing-app.firebaseapp.com",
  projectId: "buisness-listing-app",
  storageBucket: "buisness-listing-app.appspot.com",
  messagingSenderId: "802606987401",
  appId: "1:802606987401:web:58c08a4d3842a10e122e58",
  measurementId: "G-BFXJSF8WFC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };

// Uncomment and import getAnalytics if you need analytics
// import { getAnalytics } from "firebase/analytics";
// const analytics = getAnalytics(app);
