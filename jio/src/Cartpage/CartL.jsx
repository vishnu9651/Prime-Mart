import React, { useEffect, useState } from "react";
import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";
import './cart.css'
import {AiFillPlusCircle} from 'react-icons'
import { Box, Button, Circle, Divider, Flex, HStack, Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";

const CartL = () => {

  var products=JSON.parse(localStorage.getItem("cart"))
console.log("daa",products)
  
  const [data,setData] = useState(products)
 
  // const discount= Math.round(products.reduce((a,c)=>a+c.price.mrp,0))-Math.round(products.reduce((a,c)=>a+c.price.cost,0))
  const remove=(e)=>{
    const new_products = data.filter((el)=>el.id!== e.id)
    console.log(new_products)
    return new_products
  }
  
  return (
  <>
  <Box w={{sm:'80%',md:"95%",lg:'80%'}}  margin='auto' mt='1cm' spacing='20px'>
   <SimpleGrid columns={[1,2,2]}>
    <Box>
      <Flex>
      <Box>
        <Text fontWeight='semibold'  fontSize='1.4rem'>My Cart({products.length})</Text>
      </Box>
      </Flex>
      <Box mt='20px'>
         <Box display='flex' px='20px' justifyContent='space-between'>
          <Text fontSize='1.3rem' fontWeight='medium'>Your Items</Text>
          <Text fontSize='1.3rem' fontWeight='medium'>{Math.round(products.reduce((a,c)=>a+c.price,0))}</Text>
         </Box>
         <Box px='10px' mt='10px' bg='lightblue'>
        <Text fontSize='15px' align='left'>Shop groceries worth ₹1499 & get sugar at ₹9 (Offer is applicable only on products sold by Reliance Retail . For specific exclusions & offer details refer T&C)</Text>
         </Box>
      </Box>
    { products.map((e)=>(
      <Box  display='flex' px='10px' border={"1px solid black"} borderRadius="10px" margin={"5px"}  >
        <Box display='flex' mt='1cm'  justifyContent='space-between' w={{sm:'60%',md:"50%",lg:'100%'}} >
          
         <Box >
          <Image boxSize='120px' src={e.images[0]}></Image>
         </Box>
        
         <Box>
          <Text fontSize={{sm:'3px',md:"15px",lg:"15px"}} fontWeight='bold'>{e.title}</Text>
          <Text mt={1}  fontSize={{sm:'6px',md:"15px",lg:"15px"}} fontWeight='bold'>₹{e.price}</Text>
         
         </Box>
        
        </Box>
         <Box   mt='1cm' w='50%'>
          <Button bg='lightblue' ml='50%' borderRadius='20px' onClick={()=>remove(e)}>Remove</Button>
         </Box>
        
      </Box>
     
    ))
      }
    </Box>
    <Box >
    <Box py='10px' px='30px' mt='1cm'>
              <Text align ='left' mt='1cm' fontSize='20px' fontWeight='medium'>Payment Detail</Text>
              <HStack px='20px' mt='10px'>
              <Text color='grey'>MRP TOTAL</Text>
              <Spacer/>
              <Text  color='black' fontWeight='bold'>{Math.round(products.reduce((a,c)=>a+c.price,0))}</Text>
              </HStack>
              <Divider></Divider>
              <HStack px='20px' mt='10px'>
              <Text color='grey'>PRODUCT DISCOUNT</Text>
              <Spacer/>
              <Text  color='black' fontWeight='bold' >₹50</Text>
              </HStack>
              <HStack px='20px' mt='10px'>
              <Text color='black' fontWeight='medium'>Total Amount</Text>
              <Spacer/>
              <Text color='black' fontWeight='bold'> ₹{Math.round(products.reduce((a,c)=>a+c.price,0))- (+50)}</Text>
              </HStack>
               <Button bg='#008ECC' color='white' alignSelf='right'>Make Payment</Button>

            </Box>
    </Box>
    </SimpleGrid>
    </Box>  
  </>)

};



 export default CartL;



