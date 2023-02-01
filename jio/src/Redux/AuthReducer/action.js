import { login_fail, login_request, login_success } from "./actionTypes"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const login=(payload)=>(dispatch)=>{
    dispatch({type:login_request})
    return axios.post('https://rose-mysterious-cape-buffalo.cyclic.app/login',payload)
    .then((res)=>{
        dispatch({type:login_success,payload:res.data})
        console.log(res.data)
        if(res.data.token){   
          toast.success('Login Successfull',{
            position:'top-center'
        })
       
        }else{
            toast.warning('Invalid  Details',{
                position:'top-center'
            }) 
        }

    }).catch((err)=>{
        dispatch({type:login_fail})
    })
}

export {login}