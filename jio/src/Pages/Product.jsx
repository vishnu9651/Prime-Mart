import { Box, Button, Checkbox, Flex, Grid, GridItem, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import { getProducts } from '../Redux/AppReducer/action'
import { addCart, getCart } from '../Redux/CartReducer/action'

const Product = () => {
  const fruits = useSelector(store => store.AppReducer.fruitsveg)

  console.log("fruit", fruits)
  const { jiobrand } = useParams()

  const dispatch = useDispatch()
  const location = useLocation()
  const [datasearchParams] = useSearchParams()

  useEffect(() => {
    if (location || fruits.length === 0) {
      // const sortBy = searchParams.get("sort")
      const getjioParams = {
        params: {
          category: datasearchParams.getAll("category"),
          // _sort: sortBy && "release_year",
          // _order: sortBy,
        }
      }
      console.log("filter",getjioParams)
      dispatch(getProducts(getjioParams))
    }
  }, [fruits.length, location.search])



  const [searchParams, setSearchParams] = useSearchParams()

  const initialCategory = searchParams.getAll("category")
  //const initialSort = searchParams.getAll("sort")

  const [category, setCategory] = useState(initialCategory || [])

  //const [sort, setSortBy] = useState(initialSort[0] || "")

  const handleFilterCheckbox = (e) => {
    const newCategories = [...category]

    if (newCategories.includes(e.target.value)) {
      newCategories.splice(newCategories.indexOf(e.target.value), 1)
    }
    else {
      newCategories.push(e.target.value)
    }
    setCategory(newCategories)
    console.log("category1",category)
  }

  //   const handleSort = (e) => {
  //     setSortBy(e.target.value)
  //   }

  useEffect(() => {
    let params = {}
    // params.category = category
    category && (params.category = category)
    // sort && (params.sort = sort)
    setSearchParams(params)
  }, [category, setSearchParams])



  const sendData = (e) => {
    console.log("senddata", e)
    dispatch(addCart(e));
  };



  const cartdata = useSelector(store => store.CartReducer.cart)
  console.log("cartdata", cartdata)

  useEffect(() => {
    dispatch(getCart())


  }, [])

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
                    checked={category.includes("AMUL")}
                    onChange={handleFilterCheckbox} />
                  <lable>AMUL</lable>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value="GO"
                    checked={category.includes("GO")}
                    onChange={handleFilterCheckbox} />
                  <lable>GO</lable>
                </div>

                <div >
                  <input
                    type="checkbox"
                    value="PARLE"
                    checked={category.includes("PARLE")}
                    onChange={handleFilterCheckbox} />
                  <lable>PARLE</lable>
                </div>

                <div>
                  <input
                    type="checkbox"
                    value="PATANJALI"
                    checked={category.includes("PATANJALI")}
                    onChange={handleFilterCheckbox} />
                  <lable>PATANJALI</lable>
                </div>


              </Box>
            </Box>



            <Box border={"1px solid teal"} width="80%">
              <Grid templateColumns='repeat(3, 1fr)' gap={10} >
                {fruits.length > 0 &&
                  fruits.map(ele => {
                    return (

                      <GridItem key={ele.id} border="1px solid black"  mt={"5%"} pt={"7%"} borderRadius="10px" textAlign="center">
                        <Box lineHeight={"35px"} >
                          <Box mb={"7%"}>
                            <Image src={ele.img} alt="fruits" m="auto"  />
                          </Box>
                          <Box ><Heading fontSize="15px" > {ele.title}</Heading> </Box>
                           <Text  fontSize="15px" fontWeight="bold" >M.R.P: {ele.price}</Text>
                        </Box>
                        <Box ><Button colorScheme='blue' w="40%" m="5%" onClick={() => sendData(ele)}>Add To Cart</Button></Box>
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