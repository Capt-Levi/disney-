// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCkFWSjllzbhDpknox8b5m0xicSa4XfsS0",
    authDomain: "disneyplus-clone-fd35b.firebaseapp.com",
    projectId: "disneyplus-clone-fd35b",
    storageBucket: "disneyplus-clone-fd35b.appspot.com",
    messagingSenderId: "777648691714",
    appId: "1:777648691714:web:1228554d83ee81afdf251b",
    measurementId: "G-WVQMJ6T7LD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
//     signInWithPopup(auth, provider)
//         .then((result) => {
//             const name = result.user.displayName;
//             const email = result.user.email;
//             const profilePic = result.user.photoURL;

//             localStorage.setItem("name", name);
//             localStorage.setItem("email", email);
//             localStorage.setItem("profilePic", profilePic);
//         }).catch(error => console.log(error));
// }

const firebaseApp = firebase.intializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;