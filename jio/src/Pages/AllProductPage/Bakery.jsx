// import { Box, Checkbox, Heading, Input, TagLabel, Text } from '@chakra-ui/react'
// import React, { useEffect, useState } from 'react'
// import { useSearchParams } from 'react-router-dom'

// const FilterComp = () => {

//     const [searchParams, setSearchParams] = useSearchParams()

//   const initialCategory = searchParams.getAll("category")
//   //const initialSort = searchParams.getAll("sort")

//   const [category, setCategory] = useState(initialCategory || [])

//   //const [sort, setSortBy] = useState(initialSort[0] || "")

//   const handleFilterCheckbox = (e) => {
//     const newCategories = [...category]

//     if(newCategories.includes(e.target.value)){
//       newCategories.splice(newCategories.indexOf(e.target.value), 1)
//     }
//     else{
//       newCategories.push(e.target.value)
//     }
//     setCategory(newCategories)
//   }

// //   const handleSort = (e) => {
// //     setSortBy(e.target.value)
// //   }

//   useEffect(() => {
//     let params = {}
//     // params.category = category
//     category && (params.category=category)
//    // sort && (params.sort = sort)
//     setSearchParams(params)
//   }, [category, setSearchParams])
//   return (
//     <Box>
//          <Box w="250px" border="1px solid teal" mr="20px" alignItems="left">
//             <Heading fontSize="20px">Filter</Heading>
//           {/* <Checkbox >AMUL</Checkbox>
//           <br/>
//           <Checkbox >GO</Checkbox>
//           <br/>
//           <Checkbox >PARLE</Checkbox>
//           <br/>
//           <Checkbox >PATANJALI</Checkbox> */}


// <div>
//           <input 
//           type="checkbox" 
//           value="AMUL" 
//           checked={category.includes("AMUL")}
//           onChange={handleFilterCheckbox} />
//           <lable>AMUL</lable>
//         </div>
//         <div>
//           <input 
//           type="checkbox" 
//           value="GO" 
//           checked={category.includes("GO")}
//           onChange={handleFilterCheckbox} />
//           <lable>GO</lable>
//         </div>

//         <div>
//           <input 
//           type="checkbox" 
//           value="PARLE" 
//           checked={category.includes("PARLE")}
//           onChange={handleFilterCheckbox} />
//           <lable>PARLE</lable>
//         </div>

//         <div>
//           <input 
//           type="checkbox" 
//           value="PATANJALI" 
//           checked={category.includes("PATANJALI")}
//           onChange={handleFilterCheckbox} />
//           <lable>PATANJALI</lable>
//         </div>
          

//           </Box>
//     </Box>
//   )
// }

// export default FilterComp



import { Box, Button, Checkbox, Flex, Grid, GridItem, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import { getProducts } from '../Redux/AppReducer/action'

const Bakery = () => {
  const fruits = useSelector(store => store.AppReducer.fruitsveg)
  console.log(fruits)
  const { jiobrand} = useParams()

  const dispatch = useDispatch()
  const location = useLocation()
  const [datasearchParams] = useSearchParams()
  
  useEffect(() => {
    if(location || fruits.length === 0){
       // const sortBy = searchParams.get("sort")
        const getjioParams = {
          params: {
            category: datasearchParams.getAll("category"),
            // _sort: sortBy && "release_year",
            // _order: sortBy,
          }
        }
        //console.log(getjioParams)
          dispatch(getProducts(jiobrand, getjioParams))
      }
  }, [jiobrand, location.search])



  const [searchParams, setSearchParams] = useSearchParams()

  const initialCategory = searchParams.getAll("category")
  //const initialSort = searchParams.getAll("sort")

  const [category, setCategory] = useState(initialCategory || [])

  //const [sort, setSortBy] = useState(initialSort[0] || "")

  const handleFilterCheckbox = (e) => {
    const newCategories = [...category]

    if(newCategories.includes(e.target.value)){
      newCategories.splice(newCategories.indexOf(e.target.value), 1)
    }
    else{
      newCategories.push(e.target.value)
    }
    setCategory(newCategories)
  }

//   const handleSort = (e) => {
//     setSortBy(e.target.value)
//   }

  useEffect(() => {
    let params = {}
    // params.category = category
    category && (params.category=category)
   // sort && (params.sort = sort)
    setSearchParams(params)
  }, [category, setSearchParams])

  
  
  
  return (
    <Box>
        <Box>
            <Image m="auto" src='https://www.jiomart.com/images/category/2/groceries-20210201.jpeg'/>
        </Box>
        <Box mt="30px">
          <Flex justifyContent="right" mr="150px">
            <Text>Sort By :</Text>
            <Button variant='outline'size='sm' mr="10px" ml="10px">High To Low</Button>
            <Button variant='outline'size='sm'>Low To High</Button>
          </Flex>

<Box mt="50px">
        <Flex flexDirection="row" w="95%" m="auto">

         {/* <FilterComp/> */}
         <Box>
         <Box w="250px" border="1px solid teal" mr="20px" alignItems="left">
            <Heading fontSize="20px">Filter</Heading>
          {/* <Checkbox >AMUL</Checkbox>
          <br/>
          <Checkbox >GO</Checkbox>
          <br/>
          <Checkbox >PARLE</Checkbox>
          <br/>
          <Checkbox >PATANJALI</Checkbox> */}


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

        <div>
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



        <Box >
        <Grid templateColumns='repeat(4, 1fr)' gap={6} >
        {fruits.length > 0 && 
      fruits.map(ele => {
        return (
      
          <GridItem key={ele.id} border="1px solid black" w="270px" padding="30px" borderRadius="10px" textAlign="left">
            <Box h="200px">
          <Box>
          <Image src={ele.img} alt="fruits" m="auto" />
        </Box>
        <Box><Heading fontSize="15px" mb="5px"> {ele.title}</Heading> </Box>
        <Flex flexDirection="row"> <Text>M.R.P:</Text> <Text ml="5px" fontSize="15px" fontWeight="bold" > {ele.price}</Text></Flex>
        </Box>
        <Box mt="50px" mb="30x"><Button colorScheme='blue' w="100%">Add To Cart</Button></Box>
      </GridItem>
        )
      })}
</Grid>
</Box>

</Flex>
</Box>

</Box>
    </Box>
  )
}

export default Bakery