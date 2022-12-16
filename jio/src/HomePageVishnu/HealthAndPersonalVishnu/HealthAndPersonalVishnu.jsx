

import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";

import { Box, Button, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";

const homeData = [
  {
    id: 1,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669715944_1.jpg",
    
  },
  {
    id: 2,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669715982_2.jpg",
    
  },
  {
    id: 3,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669716002_3.jpg",
    
  },
  {
    id: 4,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669716022_4.jpg",
    
  },
  {
    id: 5,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669716042_5.jpg",
    
  },
  {
    id: 6,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669716067_6.jpg",
    
  }
  
];

const breakPoints = [
  { width: 1, itemsToShow: 1, pagination: false },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 768, itemsToShow: 3, pagination: false },
  { width: 1200, itemsToShow: 6, pagination: false }
];

export default function HealthAndPersonalVishnu() {

 
  return (
    <div className="carousel-main">

      <div className="carousel-wrapper">
        <Box >
          
          <Heading fontSize={'22px'} textAlign="left" margin={"20px"}>Shop From Top Categories</Heading>
          
        </Box>
        <Flex marginLeft={"6%"}>
          {homeData?.map((el) => (
            <Link style={{textDecoration:"none"}} to="">
              <Box key={el.id} width={'200px'} height={'240px'} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                <Box height={'240px'} width={'200px'} >
                  <Image src={el.img} alt="carousel-img" height={'100%'} width={'100%'} />
                </Box>
                </Box>
            </Link>
          ))}
        </Flex>
      </div>
    </div>
  );
}


