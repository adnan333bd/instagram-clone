import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDBaTrSsnKpYw_snZTxrGsQOuuybhAM_pU',
  authDomain: 'instagram-5971d.firebaseapp.com',
  projectId: 'instagram-5971d',
  storageBucket: 'instagram-5971d.appspot.com',
  messagingSenderId: '279860321120',
  appId: '1:279860321120:web:6902bf631b7b3c7d525c05'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

console.log(firebase);

export { firebase, FieldValue };
