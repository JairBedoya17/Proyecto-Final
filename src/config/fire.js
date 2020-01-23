import ReactDOM from 'react-dom';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA8P1vIDrNayDTsVKl-NmjcERS2E-mmrN8",
  authDomain: "bdreact-140d1.firebaseapp.com",
  databaseURL: "https://bdreact-140d1.firebaseio.com",
  projectId: "bdreact-140d1",
  storageBucket: "bdreact-140d1.appspot.com",
  messagingSenderId: "229870074618",
  appId: "1:229870074618:web:0640db75bfd39309"
};
const fire = firebase.initializeApp(config);

export default fire;