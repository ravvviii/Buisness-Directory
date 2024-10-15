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




// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBm6TmNXqe9D9t5s1gCcu379qujW-LxEHU",
//   authDomain: "agriconnect-8bb49.firebaseapp.com",
//   projectId: "agriconnect-8bb49",
//   storageBucket: "agriconnect-8bb49.appspot.com",
//   messagingSenderId: "883997199577",
//   appId: "1:883997199577:web:963223374693f05d6882c8",
//   measurementId: "G-9P4NEHDLYJ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { app, db };
// export const analytics = getAnalytics(app);
