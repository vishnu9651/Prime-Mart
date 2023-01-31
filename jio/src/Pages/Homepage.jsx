import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import DailyKitchenVishnu from '../HomePageVishnu/DailyKitchenVishnu/DailyKitchenVishnu'
import Footer from '../HomePageVishnu/FooterVishnu/FooterVishnu'
import HealthAndPersonalVishnu from '../HomePageVishnu/HealthAndPersonalVishnu/HealthAndPersonalVishnu'
import HomeAndCleaningVishnu from '../HomePageVishnu/HomeAndCleaningVishnu/HomeAndCleaningVishnu'
import { JioSImPosterVishnu } from '../HomePageVishnu/PosterVishnu/JioSimPosterVishnu'
import PosterVishnu from '../HomePageVishnu/PosterVishnu/PosterVishnu'
import ShopFromCategoryVishnu from '../HomePageVishnu/ShopFromCategoryVishnu/ShopFromCategoryVishnu'
import SliderCleaningThreeVishnu from '../HomePageVishnu/SliderVishnu/SliderCleaningThreeVishnu'
import SliderMedicalThreeVishnu from '../HomePageVishnu/SliderVishnu/SliderMedicalThreeVishnu'
import SliderMobileThreeVishnu from '../HomePageVishnu/SliderVishnu/SliderMobileThreeVishnu'
import HomeCarousel from '../HomePageVishnu/SliderVishnu/SliderTwoVishnu'
import SliderHomeVishnu from '../HomePageVishnu/SliderVishnu/SliderVishnu'
import TreandingBrandVishnu from '../HomePageVishnu/TreandingBrand/TreandingBrandVishnu'

const Homepage = () => {
  return (
    <div >
      <Box>
      <Link to="/electronics"><SliderHomeVishnu /></Link>
      <Link to="/electronics"> <PosterVishnu /></Link>
      <Link to="/electronics">  <HomeCarousel /></Link>
      <Link to="/electronics"> <JioSImPosterVishnu /></Link>
      
      <Link to="/fashion"><TreandingBrandVishnu /></Link>
      <Link to="/grocery"> <ShopFromCategoryVishnu /></Link>
      <Link to="/grocery"><HomeAndCleaningVishnu /></Link>
      <Link to="/grocery"> <SliderCleaningThreeVishnu /></Link>
      <Link to="/grocery"> <HealthAndPersonalVishnu /></Link>
      <Link to="/grocery"><SliderMedicalThreeVishnu /></Link>
      <Link to="/electronics"><SliderMobileThreeVishnu /></Link>
      <Link to="/"> <DailyKitchenVishnu /></Link>
      
      </Box>
    </div>
  )
}

export default Homepage