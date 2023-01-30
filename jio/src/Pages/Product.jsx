import { Box, Button, Checkbox, Flex, Grid, GridItem, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import { getProducts } from '../Redux/AppReducer/action'
import { addCart, getCart } from '../Redux/CartReducer/action'

const Product = () => {
  const fashionData = useSelector(store => store.AppReducer.data)
console.log("fashionData",fashionData)

// const fdata=fashionData.fashion
//   console.log("fdata", fdata)
  

  const dispatch = useDispatch()
  const location = useLocation()
  const [datasearchParams] = useSearchParams()
const [fdata,setFdata]=useState([])
  useEffect(() => {
  dispatch(getProducts)  

  // axios.get("https://lonely-fish-khakis.cyclic.app/data")
    //   .then((r) => setFdata(r.data.electronics))
    //   .catch((e) => {
    //     console.log(e)
    //   });
  }, []);


console.log("sd",fdata)

  



  
  return (
    <Box border={"1px solid red"}>
      <Box style={{border:"1px solid blue",margin:"1%"}}>
        <Image m="auto" src='https://www.jiomart.com/images/category/2/groceries-20210201.jpeg' />
      </Box>
      <Box border={"1px solid green"} margin="1%">
        <Box border={"1px solid green"} margin="1%">
        <Flex justifyContent="right">
          <Text>Sort By :</Text>
          <Button variant='outline' size='sm' >High To Low</Button>
          <Button variant='outline' size='sm'>Low To High</Button>
        </Flex>
        </Box>
        <Box border={"1px solid black"}>
        <Box >
          <Flex  w="95%" justifyContent={"space-between"} >

            {/* <FilterComp/> */}
            <Box border={"1px solid yellow"}>
              <Box border="1px solid teal" >
                <Heading fontSize="20px">Filter</Heading>


                <div>
                  <input
                    type="checkbox"
                    value="AMUL"
                    
                     />
                  <lable>AMUL</lable>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value="GO"
                     />
                  <lable>GO</lable>
                </div>

                <div >
                  <input
                    type="checkbox"
                    value="PARLE"
                     />
                  <lable>PARLE</lable>
                </div>

                <div>
                  <input
                    type="checkbox"
                    value="PATANJALI"
                     />
                  <lable>PATANJALI</lable>
                </div>


              </Box>
            </Box>



            <Box border={"1px solid teal"} width="80%">
              <Grid templateColumns='repeat(3, 1fr)' gap={10} >
                {
                  fashionData.map(ele => {
                    return (

                      <GridItem key={ele.id} border="1px solid black"  mt={"5%"} pt={"7%"} borderRadius="10px" textAlign="center">
                        <Box lineHeight={"35px"} >
                          <Box mb={"7%"}>
                            <Image height={"120px"}  src={ele.images[0]} alt="fruits" m="auto"  />
                          </Box>
                          <Box ><Heading fontSize="15px" > {ele.title}</Heading> </Box>
                           <Text  fontSize="15px" fontWeight="bold" >M.R.P: {ele.price}</Text>
                        </Box>
                        <Box ><Button colorScheme='blue' w="40%" m="5%" >Add To Cart</Button></Box>
                      </GridItem>
                    )
                  })}
              </Grid>
            </Box>

          </Flex>
        </Box>
</Box>
      </Box>
    </Box>
  )
}

export default Product