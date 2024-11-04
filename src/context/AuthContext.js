
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signIn = (userInfo) => {
        // log in user
    };

    const signUp = (userInfo) => {
        // sign up user
    };

    const logOut = () => {
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
