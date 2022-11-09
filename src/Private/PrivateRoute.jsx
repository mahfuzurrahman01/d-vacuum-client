import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    let location = useLocation();
    const { loading, user } = useContext(AuthContext)
    if (loading) {
        return <div className='flex items-center justify-center space-x-2 w-4/5 mx-auto my-16'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-600"></div></div>
    }
    if (!user?.email) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children
};

export default PrivateRoute;