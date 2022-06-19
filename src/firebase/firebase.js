import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAvzSlssPUuyqkBzaIRPkR_kBQtqdrHnBg",
    authDomain: "restaurante-38317.firebaseapp.com",
    projectId: "restaurante-38317",
    storageBucket: "restaurante-38317.appspot.com",
    messagingSenderId: "97470201098",
    appId: "1:97470201098:web:a1f34e88ae444dd8d24ef3",
    measurementId: "G-EWVT851ZJY"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}

