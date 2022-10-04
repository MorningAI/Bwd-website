import React from 'react'
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo'
import MainBanner from '@/components/HomeDemo5/MainBanner'
import AboutUsArea from '@/components/HomeDemo5/AboutUsArea'
import AppScreenshotsStyle5 from '@/components/AppScreenshots/AppScreenshotsStyle5'
import AppDownloadStyle2 from '@/components/Common/AppDownloadStyle2'
import FreeTrialStyle3 from '@/components/Common/FreeTrialStyle3'
import FooterStyleTwo from '@/components/_App/FooterStyleTwo'
import AppProgressStyle1 from '@/components/Common/AppProgressStyle1'
import KeyFeatures from '@/components/HomeDemo5/KeyFeatures'
import ContactForm from "@/components/Contact/ContactForm";

 
const IndexPage5 = () => {
    return (
        <React.Fragment>
            <NavbarStyleTwo />

            <MainBanner />

            <AboutUsArea />

            <AppScreenshotsStyle5 />

            <KeyFeatures/>

            <div className="pt-100">
                <AppDownloadStyle2 />
            </div>


          
      {/* <AppProgressStyle1/> */}
      <ContactForm/>
              
            <FooterStyleTwo />
        </React.Fragment>
    )
}

export default IndexPage5;