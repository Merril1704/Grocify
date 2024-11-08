import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyBcCMEyvZ-zNaBW7PRQcQFvSVAB7RdsGBg',
  authDomain: 'grocery-4fcf1.firebaseapp.com',
  projectId: 'grocery-4fcf1',
  storageBucket: 'grocery-4fcf1.firebasestorage.app',
  messagingSenderId: '1087375424919',
  appId: '1:1087375424919:web:fe5691e1addb2ba27b58d2',
};

const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
const database = getFirestore(app);

export {authentication, database};
