
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDpxettZuKZApFBGlTK4UU2kRjcyqYPS4M",
  authDomain: "login-18953.firebaseapp.com",
  projectId: "login-18953",
  storageBucket: "login-18953.appspot.com",
  messagingSenderId: "111107058218",
  appId: "1:111107058218:web:0f95ad620b62b127a63153"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleprovider= new GoogleAuthProvider()
