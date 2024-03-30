import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/cordova";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxwTP7c8-6yyufEhGAR8ll6ibZTjgZm4E",
  authDomain: "library-crud-73b12.firebaseapp.com",
  projectId: "library-crud-73b12",
  storageBucket: "library-crud-73b12.appspot.com",
  messagingSenderId: "151051659214",
  appId: "1:151051659214:web:c1f97098ee09a300a8ad9f"
};

const app = initializeApp(firebaseConfig)

export const auth=getAuth(app)
export const db=getFirestore(app)
export const provider=new GoogleAuthProvider()