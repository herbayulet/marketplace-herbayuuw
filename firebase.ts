import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
  collection,
  onSnapshot,
} from 'firebase/firestore';

import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_APP_ID,
  measurementId: process.env.EXPO_PUBLIC_MEASUREMENT_ID,
};

// EXPO_PUBLIC_FIREBASE_API_KEY=AIzaSyAmdmn3yyXmMAkiibxc0aX2prtt4vvqZI0,
// EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=community-marketplace-ee51e.firebaseapp.com
// # EXPO_PUBLIC_DATABASE_URL=https://project-id.firebaseio.com
// EXPO_PUBLIC_PROJECT_ID=community-marketplace-ee51e
// EXPO_PUBLIC_STORAGE_BUCKET=community-marketplace-ee51e.appspot.com
// EXPO_PUBLIC_MESSAGING_SENDER_ID=51427712626
// EXPO_PUBLIC_APP_ID=1:51427712626:web:50a016d69116fd33e46ceb
// EXPO_PUBLIC_MEASUREMENT_ID=G-HS8WB9S6LV

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

export {
  db,
  getFirestore,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
  collection,
  onSnapshot,
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
};
