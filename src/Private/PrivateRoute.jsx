import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext)
    if (loading) {
        return <><div className="flex items-center justify-center space-x-2 w-4/5 mx-auto mt-16">
            <div className="w-4 h-4 rounded-full animate-pulse  bg-green-600"></div>
            <div className="w-4 h-4 rounded-full animate-pulse  bg-green-600"></div>
            <div className="w-4 h-4 rounded-full animate-pulse  bg-green-600"></div>
        </div></>
    }
    return (
        <div>

        </div>
    );
};

export default PrivateRoute;