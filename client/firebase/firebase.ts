// Import the functions you need from the SDKs you need
// import firebase from 'firebase/compat/app'
// Timestamp, FieldValue, Filter from "@firebase/firestore"
import { getFirestore } from "@firebase/firestore"
import 'firebase/compat/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp, getApps, getApp} from '@firebase/app'
import { getAuth } from '@firebase/auth'
// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app')
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGESENDER_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`,
  measurementId: `${process.env.REACT_APP_MEASUREMENT_ID}`
}

// Initialize Firebase
// Instead of --> const app = initializeApp(firebaseConfig)
// If an app exists use it, else initialize
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db= getFirestore(app)
