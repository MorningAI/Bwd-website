import React from 'react';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import MainBanner from '@/components/HomeDemo1/MainBanner';
import Features from '@/components/HomeDemo1/Features';
import IntroVideo from '@/components/HomeDemo1/IntroVideo';
import BestAppEver from '@/components/HomeDemo1/BestAppEver';
import KeyFeatures from '@/components/HomeDemo1/KeyFeatures';
import AppProgressStyle1 from '@/components/Common/AppProgressStyle1';
import AppDownloadStyle1 from '@/components/Common/AppDownloadStyle1';
import AppScreenshotsStyle1 from '@/components/AppScreenshots/AppScreenshotsStyle1';
import SoftwareIntegrations from '@/components/Common/SoftwareIntegrations';
import PricingPlanStyle1 from '@/components/PricingPlan/PricingPlanStyle1';
import ClientFeedbackStyle1 from '@/components/Feedbacks/ClientFeedbackStyle1';
import FreeTrialStyle1 from '@/components/Common/FreeTrialStyle1';
import FooterStyleOne from '@/components/_App/FooterStyleOne';
 
const IndexPage = () => {
    return (
        <>
            <NavbarStyleOne /> 

            <MainBanner />
    
            <Features />

            <IntroVideo />

            <BestAppEver />

            <KeyFeatures />

            <AppProgressStyle1 />

            <AppDownloadStyle1 />

            <AppScreenshotsStyle1 />

            <SoftwareIntegrations />

            <PricingPlanStyle1 />

            <ClientFeedbackStyle1 />

            <FreeTrialStyle1 />

            <FooterStyleOne />
        </>
    )
}

export default IndexPage;