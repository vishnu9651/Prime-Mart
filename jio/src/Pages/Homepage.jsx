import React from 'react'
import DailyKitchenVishnu from '../HomePageVishnu/DailyKitchenVishnu/DailyKitchenVishnu'
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
    <div>
      <SliderHomeVishnu />
      <PosterVishnu />
      <HomeCarousel />
      <JioSImPosterVishnu />
      
      <TreandingBrandVishnu />
      <ShopFromCategoryVishnu />
      <HomeAndCleaningVishnu />
      <SliderCleaningThreeVishnu />
      <HealthAndPersonalVishnu />
      <SliderMedicalThreeVishnu />
      <SliderMobileThreeVishnu />
      <DailyKitchenVishnu />
    </div>
  )
}

export default Homepage