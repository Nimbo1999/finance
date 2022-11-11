import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: process.env.VITE_FIREBASE_API_KEY as string,
    authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN as string,
    projectId: process.env.VITE_FIREBASE_PROJECT_ID as string,
    storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET as string,
    messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string,
    appId: process.env.VITE_FIREBASE_APP_ID as string,
    measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID as string,
};

export const firebaseApp = initializeApp(firebaseConfig);
