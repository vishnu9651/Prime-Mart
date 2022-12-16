import React, { useState } from 'react'
import {Alert, AlertIcon, Box, Button, Circle, FormControl, FormErrorMessage, FormHelperText, FormLabel, HStack, Image, Input, InputGroup, InputLeftAddon, Text} from '@chakra-ui/react'
import {ChevronRightIcon} from '@chakra-ui/icons'
import {useNavigate} from 'react-router-dom'
import Login from './Login'
const Signup = () => {
  const navigate = useNavigate('')
  const [number,setNumber] = useState(false)
  const [text,setText] = useState('')
  const [otp,setOtp] = useState('')
  const isError = text.length<9 || text.length==0
  console.log(text.length)
  const change=()=>{

    !isError&&setNumber(!number)
  }
  const check=()=>{
    if(otp.length<4){
     <Alert status='error'>
     <AlertIcon/>
     Please Enter 4 digit Number
     </Alert>
    }
    else{
      otp.length==4 && navigate('/login')
    }
  
  }

  return (
    <div>
      <Box w='80%' h='auto' display='flex'  margin='auto' mt='2cm' >
        <Box>
        <Image src='https://www.jiomart.com/msassets/images/login-banner.jpg' borderRadius='10px' alt='jio'></Image>
        </Box>
        <Box>
          <Box ml='5cm' mt='2cm'>
          <FormControl alignItems='left'>
            <FormLabel>
            <Text fontWeight='medium' fontSize='2xl'>Sign In </Text> 
              <Text>Sign In, to access to your Orders,Offers and Wishlist</Text>
            </FormLabel>
            <InputGroup>
            <InputLeftAddon children='+91' mt='1cm'/>
            <Input mt='1cm' type='tel' borderColor='gray' maxLength={10} value={text} onChange={(e)=>setText(e.target.value)} placeholder='Mobile Number'/>
           
            </InputGroup>
           {!number &&<Circle mt={4} bg='#008ECC' ml='4cm' size='50px' as='button' onClick={change}>
              <ChevronRightIcon size='20px'/>
            </Circle>
          }
            {number &&<Box>
            <Input mt={5} placeholder='Enter Your OTP' onChange={(e)=>setOtp(e.target.value)} maxLength={4}></Input>
            <Button mt={4} w='full' color='white' bg='#008ECC' onClick={check} >Verify</Button>
            </Box>
            } 
          </FormControl>
          
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Signup