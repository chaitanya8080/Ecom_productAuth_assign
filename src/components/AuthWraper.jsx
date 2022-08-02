import React from 'react'

import {useSelector} from "react-redux";
import { Navigate } from 'react-router-dom';


const AuthWraper=({children})=> {

    const authStatus = useSelector((store)=>store.authReducer.auth);

    console.log(authStatus);
    if(authStatus){
        return children
    }
    return (
        <Navigate to='/login' state='/products'></Navigate>
    )
}

export default AuthWraper;