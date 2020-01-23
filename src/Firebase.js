import * as firebase from 'firebase';
//import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyA8P1vIDrNayDTsVKl-NmjcERS2E-mmrN8",
  authDomain: "bdreact-140d1.firebaseapp.com",
  databaseURL: "https://bdreact-140d1.firebaseio.com",
  projectId: "bdreact-140d1",
  storageBucket: "bdreact-140d1.appspot.com",
  messagingSenderId: "229870074618",
  appId: "1:229870074618:web:0640db75bfd39309"
  
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
