// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD5IGeYDv3z-YpFYnVdg8uPYFdL-ong8wU',
  authDomain: 'hyfah-backend.firebaseapp.com',
  databaseURL: 'https://hyfah-backend-default-rtdb.firebaseio.com',
  projectId: 'hyfah-backend',
  storageBucket: 'hyfah-backend.appspot.com',
  messagingSenderId: '485936859359',
  appId: '1:485936859359:web:1e57056c3b89b7c619c16a',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

export default database;
