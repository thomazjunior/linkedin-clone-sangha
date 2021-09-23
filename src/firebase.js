import firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC3C-GYTMMs2ifVUVjMVo-dFbLWRDHR6yU",
    authDomain: "linkedin-clone-sangha.firebaseapp.com",
    projectId: "linkedin-clone-sangha",
    storageBucket: "linkedin-clone-sangha.appspot.com",
    messagingSenderId: "193775985779",
    appId: "1:193775985779:web:fc50422570f902a81c7606",
    measurementId: "G-3GL231ZHME"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };