import React, { useEffect, useState } from "react";
import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";
import './cart.css'
import {AiFillPlusCircle} from 'react-icons'
import { Box, Button, Circle, Divider, Flex, HStack, Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";

const CartL = () => {
  const products = [
    { 
        id: 'product1',
        url: 'https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
        title: {
            shortTitle: 'Home & Kitchen',
            longTitle: 'Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)'
        }, 
        price: {
            mrp: 1195,
            cost: 625,
            discount: '47%'
        },
        description: 'This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day' 
    },
    { 
        id: 'product2',
        url: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70',
        title: {
            shortTitle: 'Sandwich Makers',
            longTitle: 'Flipkart SmartBuy Sandwich 01 Grill  (Black)'
        },
        price: {
            mrp: 1499,
            cost: 899,
            discount: '40%'
        },
        description: 'This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches. Specially designed by keeping your needs in mind, the sandwich maker makes whatever youre doing simpler, smarter and better',
        discount: 'From 99+5% Off', 
        tagline: 'Pestige, Nova & more' 
    },
    { 
        id: 'product3',
        url: 'https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70', 
        title: {
            shortTitle: 'Fitness Gear',
            longTitle: 'AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube  (Multicolor)'
        }, 
        price: {
            mrp: 499,
            cost: 166,
            discount: '66%'
        },
        description: 'This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.',
        discount: 'Upto 70% Off', 
        tagline: 'Deal of the Day' 
    },
    { 
        id: 'product4',
        url: 'https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
        title: {
            shortTitle: 'Smart Watches',
            longTitle: 'Molife Sense 500 Smartwatch  (Black Strap, Freesize)',
        }, 
        price: {
            mrp: 6999,
            cost: 4049,
            discount: '42%'
        },
        description: 'The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.',
        discount: 'Grab Now', 
        tagline: 'Best Seller' 
    },
    { 
        id: 'product5',
        url: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70', 
        title: {
            shortTitle: 'Trimmers',
            longTitle: 'Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)'
        }, 
        price: {
            mrp: 1899,
            cost: 1124,
            discount: '40%'
        },
        description: 'The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.',
        discount: 'From ₹499', 
        tagline: 'Kubra, Nova & more' 
    }
  ]
  const [data,setData] = useState(products)
 
  const discount= Math.round(products.reduce((a,c)=>a+c.price.mrp,0))-Math.round(products.reduce((a,c)=>a+c.price.cost,0))
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
          <Text fontSize='1.3rem' fontWeight='medium'>₹40</Text>
         </Box>
         <Box px='10px' mt='10px' bg='lightblue'>
        <Text fontSize='15px' align='left'>Shop groceries worth ₹1499 & get sugar at ₹9 (Offer is applicable only on products sold by Reliance Retail . For specific exclusions & offer details refer T&C)</Text>
         </Box>
      </Box>
    { data.map((e,index)=>(
      <Box key={index} display='flex' px='10px' >
        <Box display='flex' mt='1cm'  justifyContent='space-between' w={{sm:'60%',md:"50%",lg:'50%'}} >
          
         <Box>
          <Image boxSize='100px' src={e.detailUrl}></Image>
         </Box>
        
         <Box>
          <Text fontSize={{sm:'3px',md:"15px",lg:"15px"}} fontWeight='medium'>{e.title.shortTitle}</Text>
          <Text mt={1} align='left' fontSize={{sm:'6px',md:"15px",lg:"15px"}} fontWeight='medium'>₹{e.price.cost}</Text>
          <Text mt={1} align='left' fontSize={{sm:'6px',md:"15px",lg:"15px"}} fontWeight='medium'>Sold by<span color="blue">Reliance</span></Text>
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
              <Text  color='black' fontWeight='bold'>{Math.round(products.reduce((a,c)=>a+c.price.mrp,0))}</Text>
              </HStack>
              <Divider></Divider>
              <HStack px='20px' mt='10px'>
              <Text color='grey'>PRODUCT DISCOUNT</Text>
              <Spacer/>
              <Text  color='black' fontWeight='bold' >{discount}</Text>
              </HStack>
              <HStack px='20px' mt='10px'>
              <Text color='black' fontWeight='medium'>Total Amount</Text>
              <Spacer/>
              <Text color='black' fontWeight='bold'>{Math.round(products.reduce((a,c)=>a+c.price.mrp,0))-discount}</Text>
              </HStack>
               <Button bg='#008ECC' color='white' alignSelf='right'>Make Payment</Button>

            </Box>
    </Box>
    </SimpleGrid>
    </Box>  
  </>)

};



 export default CartL;



