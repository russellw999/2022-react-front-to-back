// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDN_wgtdbeVXz5oQoMRg9g5HYlePpY8lHM',
  authDomain: 'house-marketplace-app-3d052.firebaseapp.com',
  projectId: 'house-marketplace-app-3d052',
  storageBucket: 'house-marketplace-app-3d052.appspot.com',
  messagingSenderId: '672272146643',
  appId: '1:672272146643:web:c536284af6fe7ef646b426',
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
export const db = getFirestore();
