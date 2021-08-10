import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBrGaj_57aEdUtI_F-x2Hmyhsvom77ooGA",
    authDomain: "whastapp-2-f62ed.firebaseapp.com",
    projectId: "whastapp-2-f62ed",
    storageBucket: "whastapp-2-f62ed.appspot.com",
    messagingSenderId: "516232285652",
    appId: "1:516232285652:web:4ce49404f03a82e0949a41"
  };

  const app=!firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db=app.firestore();
  const auth=app.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};