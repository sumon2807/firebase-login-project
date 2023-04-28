import React, { useContext } from 'react';
import { UserContext } from '../AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user, loading}=useContext(UserContext);
    if(loading){
        return <progress className="progress progress-success w-56"></progress>;
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoutes;