import firebase from 'firebase/app'
import 'firebase/storage'

 var firebaseConfig = {
    apiKey: "AIzaSyD4l2L_GHHYs_1clp6-If_iGPGrQiM3FJQ",
    authDomain: "image-upload-65eb4.firebaseapp.com",
    projectId: "image-upload-65eb4",
    storageBucket: "image-upload-65eb4.appspot.com",
    messagingSenderId: "302491682262",
    appId: "1:302491682262:web:7e219b4e9d42dfbda6d077"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export {storage, firebase as default}
