import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
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