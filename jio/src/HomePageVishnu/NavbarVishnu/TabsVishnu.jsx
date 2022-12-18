import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import HomeAndCleaningVishnu from '../HomeAndCleaningVishnu/HomeAndCleaningVishnu'
const TabsVishnu=()=>{



return (<div style={{backgroundColor:"lightGray"}}>

<Tabs marginLeft={"5%"}>
  <TabList gap={"3.5rem"}>
  <Tab>Home</Tab>
    <Tab>Groceries</Tab>
    <Tab>Home & Kitchen</Tab>
    <Tab>Fashion</Tab>
    <Tab>Electronics</Tab>
    <Tab>Jewellery</Tab>
    <Tab>Home Improvement</Tab>
    <Tab>Sport,Toys & Language</Tab>
    

  </TabList>

  <TabPanels>
  <TabPanel></TabPanel>
   
    <TabPanel>
      <p>Groceries</p>
     </TabPanel>
    <TabPanel>
      <p>Home & Kitchen</p>
    </TabPanel>
    <TabPanel>
      <p>Fashion</p>
    </TabPanel>
  </TabPanels>
</Tabs>



</div>)

}
export default TabsVishnu


