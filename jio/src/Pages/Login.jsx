import { Box, FormControl, FormErrorMessage, FormHelperText, FormLabel, Image, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const Login = () => {
  const [input,setInput] = useState('')
  const isError = input == ''
  return (
    <div>
      <Box w='80%' h='auto' display='flex'  margin='auto' mt='2cm' border='1px' >
         <Box>
        <Image src='https://www.jiomart.com/msassets/images/login-banner.jpg' borderRadius='10px' alt='jio'></Image>
        </Box>
      <Box border='1px'>
      <Box ml='5cm' mt='1cm'>
      <FormControl >
        <FormLabel>
        <Text fontWeight='medium' fontSize='2xl'>Sign Up</Text> 
              <Text>Please enter your details</Text></FormLabel>
              <Input mt={4} placeholder='Your First Name'></Input>
              <Input  mt={4} placeholder='Your Last Name'></Input>
              <Input mt={4}  placeholder='Enter your Email id' value={input} onChange={(e)=>setInput(e.target.value)}></Input>
              {
                !isError?(
                  <FormHelperText>Use 8 or more characters with a mix of letters & number</FormHelperText>
                ):(
                 <FormErrorMessage>Password needed.</FormErrorMessage>
                )
              }
      </FormControl>
      </Box>
      </Box>
      </Box>
    </div>
  )
}

export default Login