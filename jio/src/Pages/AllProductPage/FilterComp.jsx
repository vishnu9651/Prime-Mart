import { Box, Checkbox, Heading, Input, TagLabel, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const FilterComp = () => {

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
  )
}

export default FilterComp