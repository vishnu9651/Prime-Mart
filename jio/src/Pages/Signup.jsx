import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Image, Input, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
const Signup= () => {
  const navigate = useNavigate()
  const [data,setData] = useState({
    name:'',
    email:'',
    number:'',
    password:'',
    cpassword:''
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
  //console.log(data)

  const sendData=(e)=>{
    e.preventDefault()
    const {name,email,number,password,cpassword} = data

    axios.post('https://rose-mysterious-cape-buffalo.cyclic.app/register',{
      name,email,number,password,cpassword
    }).then((res)=>{
      console.log(res)
      navigate('/login')
      toast.success('Registered Successfully',{
        position:'top-center'
    })

    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div>
      <SimpleGrid w={{base:"90%",md:'90%',lg:'80%'}} h='auto' columns={[1,1,2,2]} margin='auto' mt='2cm'  >
         <Box >
        <Image src='https://www.jiomart.com/msassets/images/login-banner.jpg' borderRadius='10px' alt='jio'></Image>
        </Box>
      <Box w='70%'   mt={[2,2,1,1]}>
      <Box ml='4cm'  margin='auto'>
      <FormControl  >
        <FormLabel>
        <Text fontWeight='medium' fontSize='2xl'>Sign Up</Text> 
              <Text>Please enter your details</Text></FormLabel>
              <Input  mt={4} name='name' value={data.name} onChange={getdata} placeholder='Your First Name'></Input>
              <Input  mt={4} name='email' value={data.email} onChange={getdata} placeholder='Email'></Input>
              <Input mt={4} name='number' value={data.number} onChange={getdata} placeholder='Mobile No.' ></Input>
              <Input mt={4} name='password' value={data.password} onChange={getdata} placeholder='Enter your password'></Input>
              <Input mt={4} name='cpassword' value={data.cpassword} onChange={getdata} placeholder='Enter you password again'></Input>
              <Link to=""><Button mt={4} w='full' onClick={sendData} >Submit</Button></Link>
              <Text>if you already have an account <span color='red'  fontWeight='md'> <Link to='/login'>Login</Link></span></Text>
      </FormControl>
      </Box>
      </Box>
      </SimpleGrid>
      <ToastContainer/>
    </div>
  )
}

export default Signup