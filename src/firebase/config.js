
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBJRGr4b_zekn-uvpqBZ_dCuXQyOcD6vt0",
    authDomain: "fb-learning-site.firebaseapp.com",
    projectId: "fb-learning-site",
    storageBucket: "fb-learning-site.appspot.com",
    messagingSenderId: "137960501489",
    appId: "1:137960501489:web:6a8deea27b45bfbf83b950"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp, projectAuth }