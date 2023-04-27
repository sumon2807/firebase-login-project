import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const UserContext=createContext(null);
const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
// create User function
    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
// sign In function
    const signIn=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
// Log Out function
    const logOut=()=>{
        return signOut(auth);
    }

// objerved on state change (useEffect hook for outside api call)

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, currentUser=>{
            console.log('auth state changed', currentUser);
            setUser(currentUser);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo={
        user,
        createUser,
        signIn,
        logOut
    }

    return (
        <div>
            <UserContext.Provider value={authInfo}>
                {children}
            </UserContext.Provider>
        </div>
    );
};

export default AuthProvider;