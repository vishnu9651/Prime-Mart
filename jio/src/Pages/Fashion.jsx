import { Box, Button, Checkbox, Flex, Grid, GridItem, Heading, Image, Input, Spacer, Text } from '@chakra-ui/react'
import { clippingParents } from '@popperjs/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import { getProducts, getProductSort } from '../Redux/AppReducer/action'
import { addCart, getCart } from '../Redux/CartReducer/action'

const Fashion = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const fashionData = useSelector(store => store.AppReducer.data)
  const initialCat = searchParams.getAll("category")
  const [category, setInitialCategory] = useState(initialCat || [])

  const initialsort = searchParams.getAll("sort")
  const [sort, setSort] = useState(initialsort[0] || "")
const [cart,setCart]=useState([])
  // const fdata=fashionData.fashion
     console.log("fdata", fashionData)


  const dispatch = useDispatch()
  const location = useLocation()
  const [datasearchParams] = useSearchParams()

  const handleSort = (e) => {

    setSort(e.target.value)
    

  //   if (sort === "asc") {
  //     let sortdata = mainData.sort((a, b) => {
  //       return (a.price - b.price)
  //     })
  //     setMainData(sortdata)
  //   }
  //   else {
  //     let sortdata = mainData.sort((a, b) => {
  //       return (b.price - a.price)
  //     })
  //     setMainData(sortdata)
  //   }
   }

  useEffect(() => {
    let params = {}
    params.category = category
    sort && (params.sort = sort)
    setSearchParams(params)
  }, [searchParams, sort, category])

  useEffect(() => {
    if (location || fashionData.length === 0) {
      const sortBy = datasearchParams.get("sort")
      const getfashionProducts = {
        params: {
          category: datasearchParams.getAll('category'),
          _sort: sortBy && "price",
          _order: sortBy
        }
      }
      dispatch(getProducts(getfashionProducts))
    }
  }, [fashionData.length, dispatch, location.search])



  const changeCategory = (e) => {
    const newCategory=[...category]
    if(newCategory.includes(e.target.value)){

      newCategory.splice(newCategory.indexOf(e.target.value),1)
    }
    else{
      newCategory.push(e.target.value)
    }
    setInitialCategory(newCategory)
  }

  var Cartdata=JSON.parse(localStorage.getItem("cart")) || []
  const addToCart=(e)=>{
    Cartdata.push(e)
    console.log(e)
    console.log("cart",Cartdata)
    localStorage.setItem("cart",JSON.stringify(Cartdata))
  }
  
    
  return (
    <Box  fontSize="lg" width={{base:"100%",sm:"70%",md:"100%",lg:"100%"}} backgroundColor="#f3f3f3">
      <Box style={{  margin: "1%" }}>
        <Image m="auto" src='https://www.jiomart.com/images/category/2/groceries-20210201.jpeg' />
      </Box>
      <Box  margin="1%">
        <Box  margin="1%" p="1%" w={{base:"65%",sm:"65%",md:"95%",lg:"100%"}}>
          <Flex justifyContent="right" gap={"1rem"}>
            <Text fontWeight={"bold"}>Sort By :</Text>

            <Box onClick={handleSort}>

              <input type="radio" value="asc" name='sortBy' defaultChecked={sort === "asc"} /> <lable style={{marginRight:"20px"}}>Low to high</lable> 
              <input type="radio" value="desc" name='sortBy' defaultChecked={sort === "desc"} /><lable style={{marginLeft:"5px"}}>High to low</lable>
            </Box>
          </Flex>
        </Box>
        <Box  w={{base:"95%",sm:"70%",md:"95%",lg:"100%"}}>
          <Box >
            <Flex  justifyContent={"space-between"}  flexFlow={{base:"column",sm:"column",md:"column",lg:"row"}} >

              {/* <FilterComp/> */}
              <Box    w={{base:"85%",sm:"45%",md:"55%",lg:"17%"}} ml={"2%"} textAlign="left" lineHeight={"30px"} fontWeight="md">
                <Box  mt={"15px"} mr={"5%"} p="3%" backgroundColor="white" >
                  <Heading fontSize="20px" mb="15px" mt="10px">Filter</Heading>


                  <div>
                    <input
                      onChange={changeCategory}
                      type="checkbox"
                      value="mens-shirts"
                      checked={category.includes("mens-shirts")}


                    />
                    <lable style={{marginLeft:"10px"}}>Mens-Tshirts</lable>
                  </div>
                  <div>
                    <input
                      onChange={changeCategory}
                      type="checkbox"
                      value="mens-shoes"
                      checked={category.includes("mens-shoes")}
                    />
                    <lable style={{marginLeft:"10px"}}>Mens-Shoes</lable>
                  </div>

                  <div >
                    <input
                      onChange={changeCategory}
                      type="checkbox"
                      value="mens-watches"
                      checked={category.includes("mens-watches")}
                    />
                    <lable style={{marginLeft:"10px"}}>Mens-Watches</lable>
                  </div>

                  <div >
                    <input
                      onChange={changeCategory}
                      type="checkbox"
                      value="womens-watches"
                      checked={category.includes("womens-watches")}
                    />
                    <lable style={{marginLeft:"10px"}}>Womens-watches</lable>
                  </div>


                </Box>
              </Box>



              <Box  width={{base:"100%",sm:"90%",md:"100%",lg:"80%"}} margin={"auto"}>
                <Grid margin={"auto"} templateColumns={{base:"repeat(1,1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(3, 1fr)" ,xl:"repeat(3, 1fr)" }}   gap={10} >
                  {
                    fashionData.map(ele => {
                      return (

                        <GridItem key={ele.id} border="1px solid black" mt={"5%"} pt={"7%"}  borderRadius="10px" width={{base:"100%",sm:"70%",md:"95%",lg:"100%"}} textAlign="center">
                          <Box lineHeight={"35px"} >
                            <Box mb={"7%"} >
                              <Image height={"120px"} src={ele.images[0]} alt="fruits" m="auto" />
                            </Box>
                            <Box ><Heading fontSize="15px" > {ele.title}</Heading> </Box>
                            <Text fontSize="15px" fontWeight="bold" >M.R.P: {ele.price}</Text>
                          </Box>
                          <Box ><Button colorScheme='blue' w="80%" m="5%" onClick={()=>addToCart(ele)}>Add To Cart</Button></Box>
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

export default Fashion