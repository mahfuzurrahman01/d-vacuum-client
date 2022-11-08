import React, { createContext } from 'react';
import app from '../Firebase/Firebase.config';
import { getAuth } from 'firebase/auth'
const auth = getAuth(app);
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const user = { name: 'mahfuz' };
    const authInfo = { user }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;