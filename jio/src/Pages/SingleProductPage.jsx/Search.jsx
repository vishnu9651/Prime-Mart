import { Input } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import SearchVishnu from "../../HomePageVishnu/NavbarVishnu/SearchVishnu"

export const Search=()=>{

    const [loading,setLoading]=useState(false)
    const [post,setPost]=useState([])
    const [searchTitle,setSearchTitle]=useState("")

    useEffect(()=>{
        const loadPost=async ()=>{
            setLoading(true);
            const response=await axios.get("https://finaldata.onrender.com/jiodata")
            setPost(response.data.fruitsveg)
            setLoading(false)
        }
        loadPost()
    },[])

    return (<div>

<h3>hello</h3>
<SearchVishnu   />
<Input type="text" placeholder="enter value" onChange={(e)=>setSearchTitle(e.target.value)} />

{loading ?(<h1>loading...</h1>):(post.filter((value)=>{
    if(searchTitle===""){
        return value
    }
    else if(value.title.toLowerCase().includes(searchTitle.toLowerCase()))
    {return value}
}).map((item)=><h2 key={item.id}><Link to="/">{item.title}</Link></h2>)


)}

    </div>)
}