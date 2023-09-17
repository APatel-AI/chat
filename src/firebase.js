// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkCrti-n3m2-hAoB5g0C6Bd1JtVvQk8ho",
  authDomain: "chat-2a14f.firebaseapp.com",
  projectId: "chat-2a14f",
  storageBucket: "chat-2a14f.appspot.com",
  messagingSenderId: "586388510845",
  appId: "1:586388510845:web:4d91ed4665191401f6f914"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)