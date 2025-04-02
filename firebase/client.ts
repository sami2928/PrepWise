// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAcU2a3CXwaFEDulQshdpXd-6Aq0GhVIQ8",
  authDomain: "prepwise-c8150.firebaseapp.com",
  projectId: "prepwise-c8150",
  storageBucket: "prepwise-c8150.firebasestorage.app",
  messagingSenderId: "1079035756541",
  appId: "1:1079035756541:web:5212bed056dd89edb66394",
  measurementId: "G-5EY7KGNR6E"
};


const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);