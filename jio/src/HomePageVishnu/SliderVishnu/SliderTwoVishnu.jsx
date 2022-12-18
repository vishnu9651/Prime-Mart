import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import "./SliderTwoVishnu.css";
import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";

const homeData = [
  {
    id: 1,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669828257_Paytm_1240_209.jpg",
    
  },
  {
    id: 2,
    
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1670694788_1240x209.jpg",
    
    },
  {
    id: 3,
    
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669828201_AU-Bank_1240x209.jpg",
    
    
  },
  {
    id: 4,
  
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1670907955_Slice_1240x209.jpg",
  
  
  },
  {
    id: 5,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669828257_Paytm_1240_209.jpg",
    
  },
  {
    id: 6,
    
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1670694788_1240x209.jpg",
    
    },
  {
    id: 7,
    
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669828201_AU-Bank_1240x209.jpg",
    
    
  },
  {
    id: 8,
  
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1670539009_1240x209.jpg",
  
  
  },
  
];

const breakPoints = [
  { width: 1, itemsToShow: 1, pagination: false },
  { width: 1200, itemsToShow: 2, pagination: false }
];

export default function HomeCarousel() {

  

  return (
    <div className="carousel-main">

      <div className="carousel-wrapper">
        <Carousel enableAutoPlay infiniteLoop={true} autoPlaySpeed={1500} breakPoints={breakPoints}>
          {homeData?.map((el) => (
            <Link style={{textDecoration:"none"}} to="">
              <Box key={el.id} width={'622px'} height={'120px'} display={'flex'} flexDirection={'column'}  boxShadow={'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px'} cursor={"pointer"}>
                <Box height={'120px'} width={'622px'} >
                  <Image src={el.img} alt="carousel-img" height={'100%'} width={'100%'}  padding={"15px"} />
                </Box>


                
              </Box>
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

// background: #dc3226;
// border-radius: 5px;
// bottom: -12px;
// content: "";
// height: 2px;
// left: 0;
// position: absolute;
// right: 0;
// width: 2em;

