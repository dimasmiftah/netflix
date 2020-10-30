import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDcjRfUb76HGcQeM7pO4O9qqvaz1gccLps',
  authDomain: 'netflix-78f38.firebaseapp.com',
  databaseURL: 'https://netflix-78f38.firebaseio.com',
  projectId: 'netflix-78f38',
  storageBucket: 'netflix-78f38.appspot.com',
  messagingSenderId: '680564733943',
  appId: '1:680564733943:web:a7994425b08a35fc07e0f2',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
