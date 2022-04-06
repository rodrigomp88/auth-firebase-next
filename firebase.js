// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpHTGCDMcJgBBBc6eMDP1TVPtJkS5u_KM",
  authDomain: "auth-nextjs-firebase.firebaseapp.com",
  projectId: "auth-nextjs-firebase",
  storageBucket: "auth-nextjs-firebase.appspot.com",
  messagingSenderId: "79507507723",
  appId: "1:79507507723:web:5ff44c4eb79de30358550e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
