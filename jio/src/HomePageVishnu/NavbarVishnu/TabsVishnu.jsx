import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import HomeAndCleaningVishnu from '../HomeAndCleaningVishnu/HomeAndCleaningVishnu'
const TabsVishnu=()=>{



return (
<Box width={{base:"100%",sm:"100%",md:"100%",lg:"100%"}}>
<div style={{backgroundColor:"lightGray"}}>

<Tabs marginLeft={"5%"}>
  <TabList gap={{base:"1rem",sm:"2rem",md:"3rem",lg:"3.5rem"}}>
  <Box><Link to="/"><Tab>Home</Tab></Link></Box>
  <Box ><Link to="/fashion"> <Tab>Fashion</Tab></Link></Box>
  <Box><Link to="/electronics"><Tab>Electronics </Tab></Link></Box>
  <Box display={{base:"none",sm:"none",md:"inline",lg:"inline"}}><Link to="/grocery"> <Tab> Groceries</Tab></Link></Box>
  <Box display={{base:"none",sm:"none",md:"inline",lg:"inline"}}><Link to="/grocery"> <Tab>Home & Kitchen</Tab></Link></Box>
  <Box display={{base:"none",sm:"none",md:"none",lg:"inline"}}><Link to="/"><Tab>Jewellery</Tab></Link></Box>
  <Box display={{base:"none",sm:"none",md:"none",lg:"inline"}}><Link to="/"><Tab>Home Improvement</Tab></Link></Box>
  <Box display={{base:"none",sm:"none",md:"none",lg:"inline"}}> <Link to="/"><Tab>Sport,Toys & Language</Tab></Link></Box>
    

  </TabList>

  <TabPanels>
  <TabPanel>

  </TabPanel>
   
    <TabPanel>
      <p>Fashion</p>
     </TabPanel>
    <TabPanel>
      <p>Electronics</p>
    </TabPanel>
    <TabPanel>
      <p>Grocery</p>
    </TabPanel>
  </TabPanels>
</Tabs>



</div>
</Box>)

}
export default TabsVishnu


