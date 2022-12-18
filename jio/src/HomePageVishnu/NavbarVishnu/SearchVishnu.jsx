import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react"
import { FiSearch } from "react-icons/fi";
function SearchVishnu() {
    const [show, setShow] =useState(false)
    const handleClick = () => setShow(!show)
  
    return (
      <InputGroup size='lg'>
        <Input
          pr='25.5rem'
          backgroundColor={"white"}
          type="text"
          placeholder='Search Products here'
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' color={"gray"} backgroundColor="white" onClick={handleClick}>
            <FiSearch  size={"20"} />
          </Button>
        </InputRightElement>
      </InputGroup>
    )
  }
  export default SearchVishnu