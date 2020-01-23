import ReactDOM from 'react-dom';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAdhxWxdAtilVPfofVhJRuedahqIDU3028",
  authDomain: "pruebabd-ae6a1.firebaseapp.com",
  databaseURL: "https://pruebabd-ae6a1.firebaseio.com",
  projectId: "pruebabd-ae6a1",
  storageBucket: "pruebabd-ae6a1.appspot.com",
  messagingSenderId: "448776334009",
  appId: "1:448776334009:web:d461d85ef426f86b"
};
const database = firebase.database().ref('/admin');

export default database;