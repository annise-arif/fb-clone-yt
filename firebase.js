// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALGj3oFUStXgna1rPB8uPELfo9pb9LiBE",
  authDomain: "fb-clone-yt-f222a.firebaseapp.com",
  projectId: "fb-clone-yt-f222a",
  storageBucket: "fb-clone-yt-f222a.appspot.com",
  messagingSenderId: "785997348457",
  appId: "1:785997348457:web:7fa30fef8586ad7116ecf8",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage};
