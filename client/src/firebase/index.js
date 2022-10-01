// Import the functions you need from the SDKs you need

import {
    getAuth,
    createUserWithEmailAndPassword, 
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider,
    sendEmailVerification,
    applyActionCode,
    verifyPasswordResetCode,
    confirmPasswordReset
} from 'firebase/auth'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEK92Q-c0UsEzr2Ww1qKlOjjRnKdAXOtM",
  authDomain: "coffee-orders-6fe98.firebaseapp.com",
  projectId: "coffee-orders-6fe98",
  storageBucket: "coffee-orders-6fe98.appspot.com",
  messagingSenderId: "362526208422",
  appId: "1:362526208422:web:a042c887d8aa65e3921f67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function signUp (email, password){
    return createUserWithEmailAndPassword(auth, email, password)
}
function signWithGoogle () {
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider)
}
function verifyEmailAddress() {
    console.log(auth.currentUser)
    return sendEmailVerification(auth.currentUser)
}
function handleEmailVerification(actionCode) {
    return applyActionCode(auth, actionCode)
}
function handlePasswordReset(actionCode) {
    return verifyPasswordResetCode(auth, actionCode)
}
function handleConfirmPasswordReset(actionCode, newPassword) {
    return confirmPasswordReset(auth, actionCode, newPassword)
}
export {
    auth,
    signUp,
    signWithGoogle,
    verifyEmailAddress,
    handleEmailVerification,
    handlePasswordReset,
    handleConfirmPasswordReset
}