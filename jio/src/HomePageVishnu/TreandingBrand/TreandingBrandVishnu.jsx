import "./TreandingBrandVishnu.css"


import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";

import { Box, Button, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";

const homeData = [
  {
    id: 1,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1670350341_Samsung_Desktop_version.jpg",
    
  },
  {
    id: 2,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1670842891_1669789269_MI_Desktop.jpg",
    
  },
  {
    id: 3,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669789289_Parle_Desktop.jpg",
    
  },
  {
    id: 4,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669785693_Wonderchef_Desktop.jpg",
    
  },
  {
    id: 5,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669785711_Lifelong_Desktop.jpg",
    
  },
  {
    id: 6,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669789323_Tecno_Desktop.jpg",
    
  },
  {
    id: 7,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669785711_Lifelong_Desktop.jpg",
    
  },
  {
    id: 8,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669789323_Tecno_Desktop.jpg",
    
  },
  {
    id: 9,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1670001405_Everteen_Desktop.jpg",
    
  },
  {
    id: 10,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669910985_Campus.jpg",
    
  }
  
];

const breakPoints = [
  { width: 1, itemsToShow: 1, pagination: false },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 768, itemsToShow: 3, pagination: false },
  { width: 1200, itemsToShow: 5.4, pagination: false }
];

export default function TreandingBrandVishnu() {

 
  return (
    <div className="carousel-main">

      <div className="carousel-wrapper">
        <Box >
          
          <Heading fontSize={'22px'} textAlign="left" margin={"20px"}>Treanding Brands</Heading>
          
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


