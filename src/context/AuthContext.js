
import React, { createContext, useContext, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase/firebase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signIn = async (email, password) => {
        // log in user
    };

    const signUp = async (name, email, password) => {
        // sign up user
    };

    const logOut = async () => {
        // log out user
    };

    return (
        <AuthContext.Provider value={{ user, signIn, signUp, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default useAuth = () => {
    return useContext(AuthContext);
}
