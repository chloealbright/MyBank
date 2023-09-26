import 'firebase/compat/auth'
import 'firebase/firestore'
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp, getApps, getApp} from '@firebase/app'
import { getAuth } from '@firebase/auth'

const firebaseConfig = {
  apiKey: `${process.env.NEXT_PUBLIC_API_KEY}`,
  authDomain: `${process.env.NEXT_PUBLIC_AUTH_DOMAIN}`,
  databaseURL: `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}`,
  projectId: `${process.env.NEXT_PUBLIC_PROJECT_ID}`,
  storageBucket: `${process.env.NEXT_PUBLIC_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.NEXT_PUBLIC_MESSAGESENDER_ID}`,
  appId: `${process.env.NEXT_PUBLIC_APP_ID}`,
  measurementId: `${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`
}
   
// Initialize Firebase original method
// If an app exists use it, else initialize --> export const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db= getFirestore(app)


