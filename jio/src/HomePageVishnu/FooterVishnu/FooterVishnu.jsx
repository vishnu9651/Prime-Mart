import { Box, Flex, Heading, Text } from "@chakra-ui/react"

import "./FooterVishnu.css";

const Footer=()=>{

    return(<div>

        
        <Box className="FooterMain"   >
<Flex fontSize={"small"} justifyContent="space-between" gap={"7rem"} textAlign="left">
    <Box w="33%" >
        <Heading size="sm" color={"black"} marginBottom={"7px"}>POPULAR CATEGORIES</Heading>
    <Text>Staples</Text>
    <Text>Beverages</Text>
    <Text>Personal Care</Text>
    <Text>Home Care</Text>
    <Text>Fruits and Vegetables</Text>
    <Text>Baby Care</Text>
    <Text>Snacks & Branded Foods</Text>
    <Text>Dairy & Bakery</Text>
    </Box>
    <Box display={{base:"none",sm:"none",md:"inline",lg:"inline"}} w="30%" >
        <Heading size="sm" color={"black"} marginBottom={"7px"} >CUSTOMER SERVICES</Heading>
        <Text>About Us</Text>
        <Text>FAQ</Text>
        <Text>Terms and Conditions</Text>
        <Text>Privacy Policy</Text>
        <Text>E-waste Policy</Text>
        
        <Text>Cancellation and return policy</Text>
    </Box>
    <Box w="30%" >
<Heading size="sm" color={"black"} marginBottom={"7px"}>CONTACT US</Heading>
<Text marginBottom={"7px"}>WhatsApp us :7000370003</Text>

<Text>Call Us: 18008901222</Text>
<Text marginBottom={"7px"}>8:00 AM to 8:00 PM,365 days</Text>
<Text marginBottom={"7px"}>Please note that you are accessing the BETA Version of www.Primemart.com</Text>
<Text marginBottom={"7px"}>Should you encounter any bugs,glitches,lack of functionality,delayed deliveries,billing errors of other problems on the beta website,please email us on cs@primemart.com</Text>
    <Heading size="sm" color={"black"} marginBottom={"7px"}>DOWNLOAD APP</Heading>
    <Flex gap={"10px"}>
        <Box><img src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/play_store.png" alt="" /></Box>
        <Box><img src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png" alt="" /></Box>
    </Flex>
    </Box>
</Flex>
        </Box>
        <Flex fontSize={"small"} color="Gray" backgroundColor={"lightgray"}>
            <Box>Best viewed on MIcrosooft Edge 81+,Mozila Firefox 75+,Safari 5.1.5+,Google Chrome 80+</Box>
        <Box>@ 2022 All rights reserved.Reliance Retail Ltd.</Box>
        </Flex>
    </div>)
}
export default Footer