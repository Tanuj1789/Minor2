import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'
require('firebase/app')
const app= firebase.initializeApp({
    apiKey: "AIzaSyCnlmOddgf9cEI4mTsC_HSwC5QCP7QD0HY",
    authDomain: "mentalhealth-18ab7.firebaseapp.com",
    projectId: "mentalhealth-18ab7",
    storageBucket: "mentalhealth-18ab7.appspot.com",
    messagingSenderId: "833080300484",
    databaseURL: "https://mentalhealth-18ab7-default-rtdb.firebaseio.com",
    appId: "1:833080300484:web:947bcf970db75d6bc3ca91"
});
export const db= app.database();
export const names=db.ref('users');
export const auth = firebase.auth()