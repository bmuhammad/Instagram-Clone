

import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';



  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCzaNTdIrm-zTTrDRkrgHzdAio8u2899d4",
    authDomain: "instagram-clone-243d8.firebaseapp.com",
    databaseURL: "https://instagram-clone-243d8-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-243d8",
    storageBucket: "instagram-clone-243d8.appspot.com",
    messagingSenderId: "920224133554",
    appId: "1:920224133554:web:8ba31c7c0cdf2c1cdaf4ab"
  });


  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  
  export { db, auth, storage }
 // export default dblClick;