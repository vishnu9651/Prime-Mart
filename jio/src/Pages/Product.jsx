import { Box, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Redux/AppReducer/action'
import ProductCard from './ProductCard'

const Product = () => {
  const fruits = useSelector(store => store.AppReducer.fruitsveg)
  console.log(fruits)
  const dispatch = useDispatch()
  // const location = useLocation()
  // const [searchParams] = useSearchParams()

  useEffect(() => {
      // if(location || books.length === 0){
      //   const sortBy = searchParams.get("sort")
      //   const getBookParams = {
      //     params: {
      //       category: searchParams.getAll("category"),
      //       _sort: sortBy && "release_year",
      //       _order: sortBy,
      //     }
      //   }
          dispatch(getProducts())
      // }
  }, [])
  return (
    <Box>
        <Box>
            <Image m="auto" src='https://www.jiomart.com/images/category/2/groceries-20210201.jpeg'/>
        </Box>

        {fruits.length > 0 && 
      fruits.map(item => {
        return (
          <ProductCard productdata={item}/>
        )
      })}

    </Box>
  )
}

export default Product