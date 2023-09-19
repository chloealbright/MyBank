// Import the functions you need from the SDKs you need
// import firebase from 'firebase/compat/app'
// Timestamp, FieldValue, Filter from "@firebase/firestore"
import 'firebase/firestore'

import { getFirestore } from "@firebase/firestore"
import firebase from 'firebase/app'
import 'firebase/compat/auth'
import 'firebase-admin/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp, getApps, getApp} from '@firebase/app'
import { getAuth } from '@firebase/auth'
// const { getFirestore } = require('firebase-admin/firestore')
// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app')
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${process.env.NEXT_APP_API_KEY}`,
  authDomain: `${process.env.NEXT_APP_AUTH_DOMAIN}`,
  databaseURL: `${process.env.NEXT_APP_FIREBASE_DATABASE_URL}`,
  projectId: `${process.env.NEXT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.NEXT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.NEXT_APP_MESSAGESENDER_ID}`,
  appId: `${process.env.NEXT_APP_APP_ID}`,
  measurementId: `${process.env.NEXT_APP_MEASUREMENT_ID}`
}

const admin = require ('firebase-admin')
  admin.initializeApp({
    
    projectId: `${process.env.FIRESTORE_PROJECT_ID}`,
    clientEmail:`${process.env.FIRESTORE_PRIVATE_KEY}`,
    privateKey: `${process.env.FIRESTORE_PRIVATE_EMAIL}`
  })
   
// Initialize Firebase
// Instead of --> const app = initializeApp(firebaseConfig)
// If an app exists use it, else initialize
// const app = initializeApp(firebaseConfig)
// if (!firebase.apps.length){
//   firebase.initializeApp(firebaseConfig)
// }
export const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()
export const auth = getAuth(app)
export const db= getFirestore(app)
// export const firebase = getFirestore()