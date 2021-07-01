import firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyDCyrPiAOAeqLWEuuDrnVWg5RcBUQv3BLA",
  authDomain: "xpcover-login.firebaseapp.com",
  projectId: "xpcover-login",
  storageBucket: "xpcover-login.appspot.com",
  messagingSenderId: "212821596461",
  appId: "1:212821596461:web:f10150f1b3941246af9ba4",
};

firebase.initializeApp(firebaseConfig);

console.log("firbase--", firebase)
export default firebase;
