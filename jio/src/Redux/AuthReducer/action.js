import { login_fail, login_request, login_success } from "./actionTypes"
import axios from 'axios'

const Login=(payload)=>(dispatch)=>{
    dispatch({type:login_request})
    return axios.post('https://reqres.in/api/login',payload)
    .then((res)=>{
        dispatch({type:login_success,payload:res.data.token})

    }).catch((err)=>{
        dispatch({type:login_fail})
    })
}

export {Login}