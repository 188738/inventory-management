// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaK3PvfVJ-Mri6a_xAOkZ7TX8O1Apfd28",
  authDomain: "inventory-management-7ac3c.firebaseapp.com",
  projectId: "inventory-management-7ac3c",
  storageBucket: "inventory-management-7ac3c.appspot.com",
  messagingSenderId: "634507119842",
  appId: "1:634507119842:web:d9349776da3d7b0bf0e2bb",
  measurementId: "G-7SLPSLVR2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

if (typeof window !== 'undefined') {
  isSupported().then((yes) => {
    if (yes) {
      const analytics = getAnalytics(app);
    }
  }).catch((err) => {
    console.log(err);
  });
}

export { firestore };
