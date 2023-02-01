import React, { useEffect, useState } from 'react'
import {Alert, AlertIcon, Box, Button, Circle, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, HStack, Image, Input, InputGroup, InputLeftAddon, InputRightElement, SimpleGrid, Text} from '@chakra-ui/react'
import {ChevronRightIcon} from '@chakra-ui/icons'
import {Link, useNavigate} from 'react-router-dom'
import Signup from './Signup'
import {login} from '../Redux/AuthReducer/action'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isauth = useSelector((store)=>store.AuthReducer.isAuth)
  const [show,Setshow] = useState(false)
  
  const handleClick=()=>{
  
    Setshow(!show)
  }
    const [data,setData] = useState({
       
        email:'',
        password:'',
       
      })
    
      // console.log(data)
      const getdata=(e)=>{
     const {name,value} = e.target
         setData(()=>{
          return{
            ...data,
            [name]:value
          }
         })
      }
    
    
      const sendData=(e)=>{
        e.preventDefault()
        const {email,password} = data
    
        // axios.post('http://localhost:3500/login',{
        //   email,password
        // }).then((res)=>{
        //   console.log(res.data)
         
        //     toast.success('login Succefully',{
        //         position:'top-center'
        //     })
           
        
        // }).catch((err)=>{
        //   console.log(err)
        // })
        if(email && password){
          dispatch(login({email,password}))
       
          
          
          
        }
        else{
          toast.error('Please provide correct details',{
            position:'top-center'
      })
        }
      }
      console.log(isauth)
      return (
        <div>
          <SimpleGrid w={{base:"90%",md:'90%',lg:'80%'}} h='auto' columns={[1,1,2,2]} margin='auto' mt='2cm'  >
             <Box >
            <Image src='https://www.jiomart.com/msassets/images/login-banner.jpg' borderRadius='10px' alt='jio'></Image>
            </Box>
          <Box w='70%'   mt={[2,2,1,1]}>
          <Box ml='4cm'  margin='auto'>
          <FormControl>
            <FormLabel>
            <Text fontWeight='medium' fontSize='2xl'>Login</Text> 
                  <Text>Please enter your details</Text></FormLabel>
                  
                  <Input  mt={4} name='email' value={data.email} onChange={getdata} placeholder='Email'></Input>
                  <InputGroup>
                  <Input mt={4} name='password' type={show?'text':'password'} value={data.password} onChange={getdata} placeholder='Enter your password'></Input>
                  <InputRightElement width='4rem'>
                    <Button mt={6}h='1.75rem' size='sm' onClick={handleClick}>{show?'Hide':"Show"}</Button>
                  </InputRightElement>
                  </InputGroup>
                  <Link to=""><Button mt={4} w='full' onClick={sendData} >Submit</Button></Link>
          </FormControl>
          </Box>
          </Box>
          </SimpleGrid>
          <ToastContainer />
        </div>
      )

}
export default Login