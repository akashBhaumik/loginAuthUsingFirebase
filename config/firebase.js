
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3su-U5FXZtNw1hmCrrScBbl0_Ihs9Njs",
  authDomain: "log-in-authentication-4181b.firebaseapp.com",
  projectId: "log-in-authentication-4181b",
  storageBucket: "log-in-authentication-4181b.appspot.com",
  messagingSenderId: "137420737062",
  appId: "1:137420737062:web:1415133492a16d471934e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
console.log("initialize = ", auth)