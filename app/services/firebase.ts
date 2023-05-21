import dotenv from 'dotenv';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  //collection,
  // getDocs
} from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

dotenv.config(); // Loads the .env file

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth();
