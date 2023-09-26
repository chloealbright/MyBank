import React, { ReactNode, createContext, useContext,  useState, useEffect } from 'react'
import { 
  Auth,
  signOut, 
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup, 
  GoogleAuthProvider,  
} from '@firebase/auth'
import { doc, addDoc, getDoc, setDoc } from 'firebase/firestore'
import  { db, auth } from '../client/firebase/firebase'
import { getFirestore } from "@firebase/firestore"

// const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore')
export interface AuthContextProviderProps{
  children?: ReactNode
}

interface AuthContextModel{
  userAuth: Auth
  currentUser: User | null,
  isAuthenticated: boolean,
  signUp: (firstName:string, lastName:string, email:string, password:string) => Promise<UserCredential>
  // googleSignIn?:(email:string, password:string) => Promise<UserCredential>
  signIn: (email:string, password:string) => Promise<UserCredential>
  logOut: (auth:Auth) => Promise<void>
  sendPasswordResetEmail?: (email: string) => Promise<void>
}


export const AuthContext = createContext<AuthContextModel>(
  {} as AuthContextModel
)

export function UseAuth(): AuthContextModel{
  return useContext(AuthContext)
}

export const AuthContextProvider = (
  {children}: AuthContextProviderProps,
): JSX.Element =>{
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [isLoading, setLoading] = useState<boolean>(true)
  const userAuth = auth
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false)

  async function signUp(firstName:string, lastName:string, email: string, password: string){
 
    try{
      const userCredential = await createUserWithEmailAndPassword(auth, email, password) //(auth, email, password)
      const { uid } = userCredential.user
      console.log('UID FROM AUTH PROVIDER ', uid)
      return userCredential

    }catch(error){
      console.error('ERROR CREATING USER: ', error)
      throw error
    }
  }
  // const googleSignIn=() =>{
  //   const provider = new GoogleAuthProvider()
  //   signInWithPopup(auth, provider)
  // }

  async function signIn(email: string, password: string){

    try{
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      // setCurrentUser(userCredential.user)
      // setAuthenticated(true)
      console.log('CURRENT USER FROM SIGN-IN ', userCredential.user)
      return userCredential
    }catch(error){
      console.error('ERROR SIGNING IN USER: ', error)
      throw error
    }
  }


  // const googleSignIn = async (): Promise<UserCredential> => {
  //   const provider = new GoogleAuthProvider();
  //   try {
  //     const result = await signInWithPopup(auth, provider);
  //     return result;
  //   } catch (error) {
  //     throw error;
  //   }
  // }
  
  function resetPassword(email: string, password: string): Promise<void>{
    return sendPasswordResetEmail(auth, email)
  }

  function logOut (auth: Auth) {
    return signOut(auth)
  }


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
      setCurrentUser(currentUser)
      setLoading(false)
      if ( currentUser == null ){
          console.log('CURRENT USER IS SIGNED OUT: ', currentUser)
          setAuthenticated(false)
      }else{
        setAuthenticated(true)
        console.log('CURRENT USER IS LOGGED IN: ', currentUser)
      }

    })

    return () => unsubscribe() // on unmount, clean listener
  },[])
  
  const values ={
    userAuth,
    currentUser,
    isAuthenticated,
    signUp,
    signIn,
    // googleSignIn,
    logOut,
    resetPassword
  }

  return <AuthContext.Provider value={values}>{!isLoading && children}</AuthContext.Provider>
  
}


