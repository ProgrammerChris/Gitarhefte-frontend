import * as firebase from 'firebase/app';

import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCNBds8DbsVsrDvPdF_RXJebPBbFN81XrA",
    authDomain: "sanghefter.firebaseapp.com",
    databaseURL: "https://sanghefter.firebaseio.com",
    projectId: "sanghefter",
    storageBucket: "sanghefter.appspot.com",
    messagingSenderId: "1021044462358",
    appId: "1:1021044462358:web:618d2d503b85eb884ab637",
    measurementId: "G-6EPFVDHNMG"
  };

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
