import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyArePF7Mg6jY-TgsC6YQXCjXyy0IkO9nKs",
  authDomain: "fn12-a2d89.firebaseapp.com",
  databaseURL:
    "https://fn12-a2d89-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fn12-a2d89",
  storageBucket: "fn12-a2d89.appspot.com",
  messagingSenderId: "950734793744",
  appId: "1:950734793744:web:a385720e6cc7494e4aee95"
};
const app = initializeApp(firebaseConfig);

export const realDB = getDatabase(app);
export const auth = getAuth(app);

export const GoogleProvider = new GoogleAuthProvider();
