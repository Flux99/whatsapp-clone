import firebase from "firebase";

const firebaseConfig = {
    //Go to your Project console on Firebase 
    //Copy Your Config  & Paste here
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};
  export default db;
