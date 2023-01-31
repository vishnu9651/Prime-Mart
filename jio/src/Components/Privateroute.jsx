import React from 'react'
import {Navigate,useLocation} from 'react-router-dom'
import { useSelector } from 'react-redux';
const Privateroute = ({children}) => {
    const location = useLocation()
    console.log('location',location)
    const isAuth = useSelector((store)=>store.AuthReducer.isAuth)
    if(!isAuth){
     alert('Please Login First')
    return <Navigate to='/login'></Navigate>
    }
    return children
}

export default Privateroute