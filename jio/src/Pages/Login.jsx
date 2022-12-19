import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Image, Input, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [input,setInput] = useState('')
  const isError = input == ''
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
              <Input  mt={4} placeholder='Your First Name'></Input>
              <Input  mt={4} placeholder='Your Last Name'></Input>
              <Input mt={4}  placeholder='Enter your Email id' value={input} onChange={(e)=>setInput(e.target.value)}></Input>
              {
                !isError?(
                  <FormHelperText>Use 8 or more characters with a mix of letters & number</FormHelperText>
                ):(
                 <FormErrorMessage>Password needed.</FormErrorMessage>
                )
              }
              <Input mt={4} placeholder='Enter your password'></Input>
              <Input mt={4} placeholder='Enter you password again'></Input>
              <Link to="/cart"><Button mt={4} w='full'>Verify</Button></Link>
      </FormControl>
      </Box>
      </Box>
      </SimpleGrid>
    </div>
  )
}

export default Login