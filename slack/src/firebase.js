import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyATrxMP_OpbFbkUTdWj2RgJRUJ6t-C0mmE",
    authDomain: "slack-40ef2.firebaseapp.com",
    databaseURL: "https://slack-40ef2.firebaseio.com",
    projectId: "slack-40ef2",
    storageBucket: "slack-40ef2.appspot.com",
    messagingSenderId: "628343792234",
    appId: "1:628343792234:web:4a55e5968d03e38c8fe013",
    measurementId: "G-NMV9LJ66RV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); 

export { auth, provider };
export default db;