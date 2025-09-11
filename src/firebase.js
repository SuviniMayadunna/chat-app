import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDF27Sje8kHgy6-vZi7W1olh0sc2G3NXcQ",
  authDomain: "chat-d5936.firebaseapp.com",
  projectId: "chat-d5936",
  storageBucket: "chat-d5936.firebasestorage.app",
  messagingSenderId: "389316520483",
  appId: "1:389316520483:web:4a15a50af8551d052c1f96"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth=getAuth()