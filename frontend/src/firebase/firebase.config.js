// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdkBzEdWJsZYElt0Ewqk0BcWB64bxyxYk",
  authDomain: "books-store-4e9e5.firebaseapp.com",
  projectId: "books-store-4e9e5",
  storageBucket: "books-store-4e9e5.firebasestorage.app",
  messagingSenderId: "1080114082201",
  appId: "1:1080114082201:web:b25d8dd88bd44fa5c3a308",

  // apiKey: import.meta.env.VITE_API_KEY,
  // authDomain: import.meta.env.VITE_Auth_Domain,
  // projectId: import.meta.env.VITE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGING_SENDERID,
  // appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
