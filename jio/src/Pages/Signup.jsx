import React from 'react'
import {Box, Button, FormControl, FormLabel, HStack, Image, Input, Text} from '@chakra-ui/react'
const Signup = () => {
  return (
    <div>
      <Box w='80%' h='auto' display='flex'  margin='auto' mt='2cm' >
        <Box>
        <Image src='https://www.jiomart.com/msassets/images/login-banner.jpg' alt='jio'></Image>
        </Box>
        <Box>
          <Box ml='5cm' mt='2cm'>
          <FormControl alignItems='left'>
            <FormLabel>
            <Text fontWeight='medium' fontSize='2xl'>Sign In </Text> 
              <Text>Sign In, to access to your Orders,Offers and Wishlist</Text>
            </FormLabel>
            <Input mt='1cm' borderColor='gray' placeholder='Email'></Input>
            <Button mt={4} >Sign Up</Button>
          </FormControl>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Signup