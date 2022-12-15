import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const ProductCard = (productdata) => {
  return (
    <Box>
        <Box key={productdata.id}>
        <Image src={productdata.img} alt="fruit" width="100%" />
      </Box>
      <Box>{productdata.title}</Box>
      <Box>{productdata.price}</Box>
    </Box>
  )
}

export default ProductCard