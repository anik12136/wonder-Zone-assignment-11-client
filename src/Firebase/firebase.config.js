// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6R6ZRrSeo_SF0v1161SnX7ZiQk0OlhsU",
  authDomain: "assignment-11-toys-shop.firebaseapp.com",
  projectId: "assignment-11-toys-shop",
  storageBucket: "assignment-11-toys-shop.appspot.com",
  messagingSenderId: "808902404231",
  appId: "1:808902404231:web:a93de33a39028717c8b022"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;