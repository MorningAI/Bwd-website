import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import AppDownloadStyle2 from '@/components/Common/AppDownloadStyle2'
import PricingPlanStyle1 from '@/components/PricingPlan/PricingPlanStyle1'
import PricingPlanStyle2 from '@/components/PricingPlan/PricingPlanStyle2'
import PricingPlanStyle3 from '@/components/PricingPlan/PricingPlanStyle3'
import PricingPlanStyle4 from '@/components/PricingPlan/PricingPlanStyle4'
import PricingPlanStyle5 from '@/components/PricingPlan/PricingPlanStyle5'
import PartnerStyle2 from '@/components/Common/PartnerStyle2'
import FooterStyleOne from '@/components/_App/FooterStyleOne' 
 
const Pricing = () => {
    return (
        <>
            <NavbarStyleOne /> 

            <PageBannerStyle1 
                pageTitle="Pricing Plan"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Pricing Plan"
            />

            <PricingPlanStyle2 />

            <PricingPlanStyle1 />

            <div className="pt-100">
                <PricingPlanStyle4 />
            </div>
 
            <PricingPlanStyle3 />

            <PartnerStyle2 />
            
            <PricingPlanStyle5 />

            <div className="pt-100">
                <AppDownloadStyle2 />
            </div>
            
            <FooterStyleOne />
        </>
    )
}

export default Pricing;