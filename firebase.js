import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyAzAUZpIY7Mkl4kuopBItEbmvhF6mIDy_s",
    authDomain: "signal-native-app-42fe2.firebaseapp.com",
    projectId: "signal-native-app-42fe2",
    storageBucket: "signal-native-app-42fe2.appspot.com",
    messagingSenderId: "280636399918",
    appId: "1:280636399918:web:75cf5f0a1588b8d39a5abf"
  };



  const  app = initializeApp(firebaseConfig);


   const db = getFirestore(app);
  
const auth = getAuth()

export {db,auth}
