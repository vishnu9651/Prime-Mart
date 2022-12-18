import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Input,
    Box,
    Text,
    Flex,
  } from '@chakra-ui/react'
import { useRef } from 'react';
import { CgMenu } from "react-icons/cg";
function MenuVishnu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='white' onClick={onOpen}>
        <CgMenu size={30} color={"white"}/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Your account</DrawerHeader>
  
            <DrawerBody>
             <Box lineHeight={"35px"}>
              <Box color="white" borderRadius={"5px"}  backgroundColor="blue" padding={"8px"}>
                <Text>Hello User</Text>
                <Flex justifyContent={"space-around"}>
                    <Box border="2px solid white" borderRadius={"5px"} padding={"3px"}>Account</Box>
                    <Box border="2px solid white" borderRadius={"5px"} padding={"3px"}>Orders</Box>
                </Flex>
              </Box>
              <Box>Home</Box>
              <Box>Shop by Category</Box>
              <Box>My List</Box>
              <Box>PrimeMart Wallet</Box>
              <Box>PrimeMart Gift Store</Box>
              <Box>PrimeMart GiftCard</Box>
              <Box>GoGreen with PrimeMart</Box>
              <Box>Coupon Store</Box>
              <Box>All Offers</Box>
              <Box>My Account</Box>
              <Box>Need Help</Box>
              <Box></Box>
              </Box>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
              Close
              </Button>
              
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default MenuVishnu;