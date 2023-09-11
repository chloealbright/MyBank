import React, { ReactNode, createContext, useContext,  useState, useEffect } from 'react'
import { 
  Auth,
  signInWithPopup, 
  signOut, 
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail  
} from '@firebase/auth'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import { auth } from '../firebase/firebase'


export interface AuthContextProviderProps{
  children?: ReactNode
}

interface AuthContextModel{
  auth: Auth
  user: User | null
  signUp: (firstName:string, lastName:string, email:string, password:string) => Promise<UserCredential>
  // googleSignIn?:(email:string, password:string) => Promise<UserCredential>
  signIn?: (email:string, password:string) => Promise<UserCredential>
  signOut?: (auth:Auth) => Promise<void>
  sendPasswordResetEmail?: (email: string) => Promise<void>
}


export interface UserContextState{
  isAuthenticated: boolean
  isLoading: boolean
  id?: string
}

export const AuthContext = createContext<AuthContextModel>(
  {} as AuthContextModel
)

export function UseAuth(): AuthContextModel{
  return useContext(AuthContext)
}

export const UserState = createContext<UserContextState>(
  {} as UserContextState
)


export const AuthContextProvider = (
  {children}: AuthContextProviderProps
): JSX.Element =>{
  const [user, setUser] = useState<User | null>(null)

  async function signUp(firstName:string, lastName:string, email: string, password: string){
    try{
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const { uid } = userCredential.user
      const db = getFirestore()
      const userDocRef = doc(db, 'users', uid)
      await setDoc(userDocRef, {
        firstName,
        lastName,
        email,
        password
      })

      return userCredential
    } catch (error) {
      console.error('ERROR CREATING USER: ', error)
      throw error
    }

    // return createUserWithEmailAndPassword(auth, email, password)
  }
  // const googleSignIn=() =>{
  //   const provider = new GoogleAuthProvider()
  //   signInWithPopup(auth, provider)
  // }

  async function signIn(email: string, password: string){
    return signInWithEmailAndPassword(auth, email, password)
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

  const logout = () =>{
    signOut(auth)
  }
  // Firebase auth state listener
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
      setUser(currentUser)
    })

    return () => unsubscribe() // on unmount, clean listener
  },[user])
  
  const values ={
    auth,
    user,
    signUp,
    signIn,
    // googleSignIn,
    logout,
    resetPassword
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
  
}

export const useUserContext = (): UserContextState =>{
  return useContext(UserState)
}
