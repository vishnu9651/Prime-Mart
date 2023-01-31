import { login_fail, login_request, login_success } from "./actionTypes"
import axios from 'axios'

const login=(payload)=>(dispatch)=>{
    dispatch({type:login_request})
    return axios.post('https://rose-mysterious-cape-buffalo.cyclic.app/login',payload)
    .then((res)=>{
        dispatch({type:login_success,payload:res.data})
        console.log(res.data)
    }).catch((err)=>{
        dispatch({type:login_fail})
    })
   
}

export {login}