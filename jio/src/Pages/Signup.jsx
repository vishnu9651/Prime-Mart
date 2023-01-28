import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Image, Input, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Signup= () => {
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

    axios.post('http://localhost:3500/register',{
      name,email,number,password,cpassword
    }).then((res)=>{
      console.log(res)
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
              <Input  mt={4} name='email' value={data.email} onChange={getdata} placeholder='Mobile No.'></Input>
              <Input mt={4} name='number' value={data.number} onChange={getdata} placeholder='Enter your Email id' ></Input>
              <Input mt={4} name='password' value={data.password} onChange={getdata} placeholder='Enter your password'></Input>
              <Input mt={4} name='cpassword' value={data.cpassword} onChange={getdata} placeholder='Enter you password again'></Input>
              <Link to=""><Button mt={4} w='full' onClick={sendData} >Verify</Button></Link>
      </FormControl>
      </Box>
      </Box>
      </SimpleGrid>
    </div>
  )
}

export default Signup