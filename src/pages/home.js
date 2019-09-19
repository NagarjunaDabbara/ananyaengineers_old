import React from 'react'
import './home.scss'
import BannerVideo from '../components/bannerVideo/video.js'
import Navigation from '../components/navigation/navigation.js'
import SplitSlider from '../components/bannerAnimation/banneranimation.js'
import WhatWeDo from '../components/whatWeDo/whatWeDo.js'
import CustomersReview from '../components/customersreview/customersreview.js'
import OurServices from '../components/ourservices/ourservices.js'
import bottom from '../components/assets/ananyaelite.jpg'
import top from '../components/assets/p2.jpg'
import Footer from '../components/footer/footer.js'
import Error from '../components/error/error.js'

const Home=()=>(
    <div>
       
     <BannerVideo/>
     <Navigation/>
     <WhatWeDo/>
     <SplitSlider 
									BottomLayerTitle={'Ananya Engineers'} 
									BottomLayerText={'Unique Place For Quality Services.'} 
									BottomLayerSrc={top}
									TopLayerTitle={'OUR WORK'} 
									TopLayerText={'Our work portfolio ranges from single-family homes to two unit condo buildings to large multi-family residences. No matter the size of the project, our goal is to deliver something exceptional every time.'} 
									TopLayerSrc={bottom}
									handleColor={'#06659B'}
									handleRotation={33} />
      <OurServices/>
      <CustomersReview/>
     <Footer/>
    <div className="scrolltop-wrap">
    <a href="#" role="button" aria-label="Scroll to top">
        <svg height="48" viewBox="0 0 48 48" width="48" height="48px" xmlns="http://www.w3.org/2000/svg">
            <path id="scrolltop-bg" d="M0 0h48v48h-48z"></path>
            <path id="scrolltop-arrow" d="M14.83 30.83l9.17-9.17 9.17 9.17 2.83-2.83-12-12-12 12z"></path>
        </svg>
    </a>
  </div>
   

     </div>
)
export default Home;