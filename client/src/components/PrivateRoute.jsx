import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function PrivateRoute({children}) {
    const {userInit} = useSelector(state=>state)
    const navigate = useNavigate()
    useEffect(()=>{
        if(userInit.status!=='Admin'){
            navigate('/')
        }
    },[])
    if(userInit.status==='Admin'){
        return <>
    {children }
    </>
    } else {
     
        return null
    }
    
}