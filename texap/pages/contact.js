import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleTwo'
import ContactForm from '@/components/Contact/ContactForm'
import ContactInfo from '@/components/Contact/ContactInfo'
import FooterStyleTwo from '@/components/_App/FooterStyleTwo'
import PageBannerStyle2 from '@/components/Common/PageBannerStyle2'
 
const Contact = () => {
    return (
        <>
            <NavbarStyleOne /> 

            <PageBannerStyle2 
                pageTitle="Contact Us"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Contact Us"
            />

            

            
 
            <FooterStyleTwo />
        </>
    )
}

export default Contact;