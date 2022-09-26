import React from 'react'
import ClientFeedbackStyle1 from '@/components/Feedbacks/ClientFeedbackStyle1'
import ClientFeedbackStyle2 from '@/components/Feedbacks/ClientFeedbackStyle2'
import ClientFeedbackStyle3 from '@/components/Feedbacks/ClientFeedbackStyle3'
import ClientFeedbackStyle4 from '@/components/Feedbacks/ClientFeedbackStyle4'
import ClientFeedbackStyle5 from '@/components/Feedbacks/ClientFeedbackStyle5'
import ClientFeedbackStyle6 from '@/components/Feedbacks/ClientFeedbackStyle6'
import PartnerStyle3 from '@/components/Common/PartnerStyle3'
import PageBannerStyle2 from '@/components/Common/PageBannerStyle2'
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo'
import FooterStyleTwo from '@/components/_App/FooterStyleTwo'
 
const Feedback = () => {
    return (
        <>
            <NavbarStyleTwo /> 

            <PageBannerStyle2 
                pageTitle="Feedback"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Feedback"
            />



            <ClientFeedbackStyle5 />

 
            <FooterStyleTwo />
        </>
    )
}

export default Feedback;