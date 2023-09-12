// firebase.js

import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCO0iBGzztFAWeoUMubYtmP4rJMtGMOZM0',
  authDomain: 'employee-management-100cc.firebaseapp.com',
  databaseURL: 'https://employee-management-100cc-default-rtdb.firebaseio.com',
  projectId: 'employee-management-100cc',
  storageBucket: 'employee-management-100cc.appspot.com',
  messagingSenderId: '743043747489',
  appId: '1:743043747489:web:019ef828a4100a3bf92ae0',
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
