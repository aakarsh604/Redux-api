import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Navigate } from 'react-router-dom';

const RequireAuth = ({children}) => {
        const {isAuth} = useSelector(state => state.auth)
        console.log('isAuth:', isAuth)
        const {pathname} = useLocation();

        if ( isAuth ) return children;
        return <Navigate to="/login" state={{ from : pathname}} replace /> 
}
export default RequireAuth;

