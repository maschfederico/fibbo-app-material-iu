import  firebase from 'firebase/app';
import '@firebase/firestore'

const app = firebase.initializeApp(
    {
    apiKey: "AIzaSyAybNthF0FOrWuTqo4t_giLUyAWBLv_Au8",
    authDomain: "fibbo-app-coderhouse.firebaseapp.com",
    projectId: "fibbo-app-coderhouse",
    storageBucket: "fibbo-app-coderhouse.appspot.com",
    messagingSenderId: "1016613433677",
    appId: "1:1016613433677:web:1099b486fb3fb4bd0d0704",
    measurementId: "G-KK4GN3TXZ7"
    }
);

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}