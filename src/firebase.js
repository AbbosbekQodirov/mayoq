import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyDzZsaYUbVZ-zQ5Q-hBsEq6dmsOcfH4Nyo",
    authDomain: "soscaruser-2265d.firebaseapp.com",
    databaseURL: "https://soscaruser-2265d-default-rtdb.firebaseio.com",
    projectId: "soscaruser-2265d",
    storageBucket: "soscaruser-2265d.appspot.com",
    messagingSenderId: "1038258661245",
    appId: "1:1038258661245:web:6b5987418b7536669d4e14",
    measurementId: "G-W6Q8SQRLH9"
};


const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)
