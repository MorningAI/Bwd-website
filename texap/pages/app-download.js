import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleTwo'
import AppDownloadStyle2 from '@/components/Common/AppDownloadStyle2'
import FooterStyleTwo from '@/components/_App/FooterStyleTwo'
import PageBannerStyle2 from '@/components/Common/PageBannerStyle2'
 
const AppDownload = () => {
    return (
        <>
            <NavbarStyleOne /> 

            <PageBannerStyle2 
                pageTitle="App Download"
                homePageUrl="/"
                homePageText="Home"
                activePageText="App Download"
            />

            <div className="pt-100">
                <AppDownloadStyle2 />
            </div>
            
 
            <FooterStyleTwo/>
        </>
    )
}

export default AppDownload;