import React from 'react'
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo'
import MainBanner from '@/components/HomeDemo5/MainBanner'
import AboutUsArea from '@/components/HomeDemo5/AboutUsArea'
import Features from '@/components/HomeDemo5/Features'
import KeyFeatures from '@/components/HomeDemo5/KeyFeatures'
import AppScreenshotsStyle5 from '@/components/AppScreenshots/AppScreenshotsStyle5'
import PricingPlanStyle5 from '@/components/PricingPlan/PricingPlanStyle5'
import AppDownloadStyle2 from '@/components/Common/AppDownloadStyle2'
import ClientFeedbackStyle5 from '@/components/Feedbacks/ClientFeedbackStyle5'
import FreeTrialStyle3 from '@/components/Common/FreeTrialStyle3'
import FooterStyleTwo from '@/components/_App/FooterStyleTwo'
 
const IndexPage5 = () => {
    return (
        <>
            <NavbarStyleTwo />

            <MainBanner />

            <AboutUsArea />

            <Features />

            <KeyFeatures />

            <AppScreenshotsStyle5 />

            <PricingPlanStyle5 />
            
            <div className="pt-100">
                <AppDownloadStyle2 />
            </div>

            <ClientFeedbackStyle5 />
            
            <div className="pt-100">
                <FreeTrialStyle3 />
            </div>
      
              
            <FooterStyleTwo />
        </>
    )
}

export default IndexPage5;