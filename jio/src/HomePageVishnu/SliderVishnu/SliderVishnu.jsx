
import "./SliderVishnu.css"
import SimpleImageSlider from "react-simple-image-slider";
import { Box } from "@chakra-ui/react";
const images = [
    { url: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1670868281_web.jpg" },
    { url: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1670957636_Bath--Body-Essentials.ai_1680x320.jpg" },
    { url: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669913386_1669808764_KV_1680x320.jpg" },
    { url: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1670868095_Bindaas-Biscuiting_1680x320.jpg" },
    { url: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1670867865_Home-and-Kitchen-Appliances-Carnival_1680-x-320.jpg" },
    { url: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1670956574_Iphone_Banner_iphone_13_desktop.jpg" },
  ];
const SliderHomeVishnu=()=>{

    return (<Box  width={{base:"100%",sm:"100%",md:"80%",lg:"100%"}}><div style={{zIndex:-1,overflow:"visible"}}  className="SliderTopVishnu" >

<SimpleImageSlider  
    style={{zIndex:-1}}
    width="100%"
        navSize={40}
    
        height="350px"
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}

      />
      
    </div>
    </Box>)
}
export default SliderHomeVishnu