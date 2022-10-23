import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfCaF_CgV0lXDu30tD3PaUy_bymXBsgKw",
  authDomain: "algotest-f2cd3.firebaseapp.com",
  projectId: "algotest-f2cd3",
  storageBucket: "algotest-f2cd3.appspot.com",
  messagingSenderId: "973623290529",
  appId: "1:973623290529:web:776ef3820dea61f8c19ee0",
  measurementId: "G-GXGZSDG2WM",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
export {db}
const analytics = getAnalytics(firebase);
