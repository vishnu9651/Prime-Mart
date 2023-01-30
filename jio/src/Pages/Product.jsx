import { Box, Button, Checkbox, Flex, Grid, GridItem, Heading, Image, Input, Spacer, Text } from '@chakra-ui/react'
import { clippingParents } from '@popperjs/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import { getProducts, getProductSort } from '../Redux/AppReducer/action'
import { addCart, getCart } from '../Redux/CartReducer/action'

const Product = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const fashionData = useSelector(store => store.AppReducer.data)
  const initialCat = searchParams.getAll("category")
  const [category, setInitialCategory] = useState(initialCat || [])

  const initialsort = searchParams.getAll("sort")
  const [sort, setSort] = useState(initialsort[0] || "")

  // const fdata=fashionData.fashion
  //   console.log("fdata", fdata)


  const dispatch = useDispatch()
  const location = useLocation()
  const [datasearchParams] = useSearchParams()


  // useEffect(() => {
  // dispatch(getProducts)  

  // }, []);




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

  return (
    <Box border={"1px solid red"}>
      <Box style={{ border: "1px solid blue", margin: "1%" }}>
        <Image m="auto" src='https://www.jiomart.com/images/category/2/groceries-20210201.jpeg' />
      </Box>
      <Box border={"1px solid green"} margin="1%">
        <Box border={"1px solid green"} margin="1%">
          <Flex justifyContent="right" gap={"1rem"}>
            <Text>Sort By :</Text>

            <Box onClick={handleSort}>

              <lable>Low to high</lable> <input type="radio" value="asc" name='sortBy' defaultChecked={sort === "asc"} />
              <lable>High to low</lable><input type="radio" value="desc" name='sortBy' defaultChecked={sort === "desc"} />
            </Box>
          </Flex>
        </Box>
        <Box border={"1px solid black"}>
          <Box >
            <Flex w="95%" justifyContent={"space-between"} >

              {/* <FilterComp/> */}
              <Box border={"1px solid yellow"}>
                <Box border="1px solid teal" >
                  <Heading fontSize="20px">Filter</Heading>


                  <div>
                    <input
                      onChange={changeCategory}
                      type="checkbox"
                      value="mens-shirts"
                      checked={category.includes("mens-shirts")}


                    />
                    <lable>mens-shirts</lable>
                  </div>
                  <div>
                    <input
                      onChange={changeCategory}
                      type="checkbox"
                      value="mens-shoes"
                      checked={category.includes("mens-shoes")}
                    />
                    <lable>"mens-shoes"</lable>
                  </div>

                  <div >
                    <input
                      onChange={changeCategory}
                      type="checkbox"
                      value="mens-watches"
                      checked={category.includes("mens-watches")}
                    />
                    <lable>mens-watche</lable>
                  </div>

                  <div>
                    <input
                      onChange={changeCategory}
                      type="checkbox"
                      value="womens-watches"
                      checked={category.includes("womens-watches")}
                    />
                    <lable>womens-watches</lable>
                  </div>


                </Box>
              </Box>



              <Box border={"1px solid teal"} width="80%">
                <Grid templateColumns='repeat(3, 1fr)' gap={10} >
                  {
                    fashionData.map(ele => {
                      return (

                        <GridItem key={ele.id} border="1px solid black" mt={"5%"} pt={"7%"} borderRadius="10px" textAlign="center">
                          <Box lineHeight={"35px"} >
                            <Box mb={"7%"}>
                              <Image height={"120px"} src={ele.images[0]} alt="fruits" m="auto" />
                            </Box>
                            <Box ><Heading fontSize="15px" > {ele.title}</Heading> </Box>
                            <Text fontSize="15px" fontWeight="bold" >M.R.P: {ele.price}</Text>
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