import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
// import "./SliderTwoVishnu.css";
import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";

const homeData = [
  {
    id: 1,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1671053721_Scotch_Brite_Desktop.jpg",
    
  },
  {
    id: 2,
    
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669788166_Harpic_Desktop.jpg",
    
    },
  {
    id: 3,
    
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669788166_Harpic_Desktop.jpg",
    
    
  },
  {
    id: 4,
  
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669788192_Zimmer_Auframen_Desktop.jpg",
  
  
  },
  {
    id: 5,
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669828257_Paytm_1240_209.jpg",
    
  },
  {
    id: 6,
    
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1671053795_Lizol_Desktop.jpg",
    
    },
  {
    id: 7,
    
    img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1671053830_Shatras_Desktop.jpg",
    
    
  }
  
];

const breakPoints = [
  { width: 1, itemsToShow: 1, pagination: false },
  { width: 1200, itemsToShow: 3, pagination: false }
];

export default function SliderCleaningThreeVishnu() {

  

  return (
    <div  style={{marginTop:"30px"}}>

      <div >
        <Carousel enableAutoPlay infiniteLoop={true} autoPlaySpeed={1500} breakPoints={breakPoints}>
          {homeData?.map((el) => (
            <Link style={{textDecoration:"none"}} to="">
              <Box key={el.id} width={'422px'} height={'90px'} display={'flex'} flexDirection={'column'}  boxShadow={'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px'} cursor={"pointer"}>
                <Box height={'90px'} width={'422px'} >
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

