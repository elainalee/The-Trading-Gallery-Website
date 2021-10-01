/* eslint-disable no-undef */
import firebase from 'firebase/app';
import 'firebase/auth';

// const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
// });

const app = firebase.initializeApp({
    apiKey: "AIzaSyANwcpB4nrpASbj9x5lduttlqmmEt1weMI",
    authDomain: "callisto-dev-leej.firebaseapp.com",
    projectId: "callisto-dev-leej",
    storageBucket: "callisto-dev-leej.appspot.com",
    messagingSenderId: "498788079646",
    appId: "1:498788079646:web:6e6ecf0ad06d0f937b760f"
});

export const auth = app.auth();
export default app;
