import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCp-254GGooDup2j6BAWRA1cJCynHKDHF0",
    authDomain: "orienteering-91219.firebaseapp.com",
    databaseURL: "https://orienteering-91219-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "orienteering-91219",
    storageBucket: "orienteering-91219.appspot.com",
    messagingSenderId: "176167374512",
    appId: "1:176167374512:web:6eddd681957edc4e59f575",
    measurementId: "G-G44BS4E584"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp
