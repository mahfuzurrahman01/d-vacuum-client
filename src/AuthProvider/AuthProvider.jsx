import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
const auth = getAuth(app);
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //sign in user with email and password
    const logInwithEmailandPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //log out 
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    //update current user
    const updateUser = (name,photoUrl) => {
        updateProfile(auth.currentUser, {
            displayName: `${name}` , photoURL: `${photoUrl}`})
    }
    //on auth state change
    useEffect(() => {
        const subscription = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser);
            setLoading(false);
        })
        return () => subscription()
    }, [])

    const authInfo = { user, loading, createUser, logInwithEmailandPassword, logOut,updateUser }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;