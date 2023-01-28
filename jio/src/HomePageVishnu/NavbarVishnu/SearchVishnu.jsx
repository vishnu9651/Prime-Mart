import { Box, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { FiSearch } from "react-icons/fi";
import "./Search.css"
import { Link, useNavigate } from "react-router-dom";
function SearchVishnu() {
    const [show, setShow] =useState(false)
  const navigate=useNavigate()
    const [loading,setLoading]=useState(false)
    const [post,setPost]=useState([])
    const [searchTitle,setSearchTitle]=useState("")
const [text,setText]=useState("")
    const handleClick = () => setShow(!show)
  
    useEffect(()=>{
              const loadPost=async ()=>{
                  setLoading(true);
                  const response=await axios.get("https://finaldata.onrender.com/jiodata")
                  setPost(response.data.fruitsveg)
                  setLoading(false)
              }
              loadPost()
          },[])


const handleData=(e)=>{
navigate("/product")

setSearchTitle("")

}

    return (<Box>
      <InputGroup size='lg'>
        <Input
          pr='25.5rem'
          backgroundColor={"white"}
          color="black"
          type="text" placeholder="search product here" value={searchTitle}  onChange={(e)=>setSearchTitle(e.target.value)} />
        <InputRightElement width='4.5rem'>
          <Button className="searchData" h='1.75rem' size='sm' color={"gray"} backgroundColor="white" onClick={handleClick}>
            <FiSearch  size={"20"} />
          </Button>
        </InputRightElement>
      </InputGroup>
      <Box  overflow={"visible"}  height={"20px"}>
    {loading ?(<h1>loading...</h1>):(post.filter((value)=>{
      if(searchTitle===""){
          
      }
      else if(value.title.toLowerCase().includes(searchTitle.toLowerCase()))
      {return value}
  }).map((item)=> <Box className="displayData"><Box key={item.id} ><Button onClick={handleData}><h2 >{item.title}</h2></Button></Box></Box>)
  
  
  )}
  </Box>
  </Box>
    
    )
  }
  export default SearchVishnu


//   import { Input } from "@chakra-ui/react"
// import axios from "axios"
// import { useEffect, useState } from "react"
// import SearchVishnu from "../../HomePageVishnu/NavbarVishnu/SearchVishnu"

// export const Search=()=>{

//     const [loading,setLoading]=useState(false)
//     const [post,setPost]=useState([])
//     const [searchTitle,setSearchTitle]=useState("")

//     useEffect(()=>{
//         const loadPost=async ()=>{
//             setLoading(true);
//             const response=await axios.get("https://finaldata.onrender.com/jiodata")
//             setPost(response.data.fruitsveg)
//             setLoading(false)
//         }
//         loadPost()
//     },[])

//     return (<div>

// <h3>hello</h3>
// <SearchVishnu   />
// <Input type="text" placeholder="enter value" onChange={(e)=>setSearchTitle(e.target.value)} />

// {loading ?(<h1>loading...</h1>):
// (post.filter((value)=>{
//     if(searchTitle===""){
//         return value
//     }
//     else if(value.title.toLowerCase().includes(searchTitle.toLowerCase()))
//     {return value}
// }).map((item)=><h2 key={item.id}>{item.title}</h2>)


// )}

//     </div>)
// }