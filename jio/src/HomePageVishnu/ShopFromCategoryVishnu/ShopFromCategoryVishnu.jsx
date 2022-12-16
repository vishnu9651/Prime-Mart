import "./ShopFromCategoryVishnu.css";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";

import { Box, Button, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";

const homeData = [
  {
    id: 1,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669703300_1668783198_Shop-From-Top-Categories-19.jpg",
    
  },
  {
    id: 2,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669703341_1669354771_Shop-From-Top-Categories-16.jpg",
    
  },
  {
    id: 3,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669703402_1667814151_1666962092_Shop-From-Top-Categories-17.jpg",
    
  },
  {
    id: 4,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1671045548_Shop-From-Top-Categories-23.jpg",
    
  },
  {
    id: 5,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1671045576_Shop-From-Top-Categories-22.jpg",
    
  },
  {
    id: 6,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669703054_1669120666_Tea__Coffee.jpg",
    
  },
  {
    id: 7,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669703137_1669120884_Biscuits__Cookies.jpg",
    
  },
  {
    id: 8,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669703963_1668422823_1667814516_1666962153_Shop-From-Top-Categories-07.jpg",
    
  },
  {
    id: 9,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669704018_1668590311_Shop-From-Top-Categories-08.jpg",
    
  },
  {
    id: 10,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669704043_1667814699_1667593961_Shop-From-Top-Categories-09.jpg",
    
  }
  
];

const breakPoints = [
  { width: 1, itemsToShow: 1, pagination: false },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 768, itemsToShow: 3, pagination: false },
  { width: 1200, itemsToShow: 5.4, pagination: false }
];

export default function ShopFromCategoryVishnu() {

 
  return (
    <div className="carousel-main">

      <div className="carousel-wrapper">
        <Box >
          
          <Heading fontSize={'22px'} textAlign="left" margin={"20px"}>Shop From Top Categories</Heading>
          
        </Box>
        <Carousel breakPoints={breakPoints}>
          {homeData?.map((el) => (
            <Link style={{textDecoration:"none"}} to="">
              <Box key={el.id} width={'200px'} height={'240px'} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                <Box height={'240px'} width={'200px'} >
                  <Image src={el.img} alt="carousel-img" height={'100%'} width={'100%'} />
                </Box>
                </Box>
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
}


