import React from 'react';
import {Navigate} from 'react-router-dom';
import {useSelector} from "react-redux";

type ProtectedRouteType = {
    children: React.ReactElement
}

const ProtectedRoute = ({children}: ProtectedRouteType) => {

    const user = useSelector((state: any) => state.user)

    if (!user.isAuthenticated) {
        return <Navigate to="/" replace/>;
    }
    return children;
};
export default ProtectedRoute;