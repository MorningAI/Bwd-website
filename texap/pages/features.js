import React from 'react'
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo'
import FooterStyleTwo from '@/components/_App/FooterStyleTwo'
import PageBannerStyle2 from '@/components/Common/PageBannerStyle2'
 
const Features = () => {
    return (
        <>
            <NavbarStyleTwo/> 

            <PageBannerStyle2 
                pageTitle="Products Features"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Features"
            />

            <div className="features-area ptb-100 bg-F7F7FF">
                <div className="container">
                    <div className="section-title">
                        <h2>Key Features</h2>
                    </div>

                    <div className="row justify-content-center">

                    <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
                            <div className="single-features-item">
                                <div className="icon">
                                    <i className="ri-group-line"></i>
                                </div>
                                <h3>User Friendly</h3>
                                <p>Intuitive design that will offer you a grate user experience </p>
                            </div>
                        </div>
            
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
                            <div className="single-features-item">
                                <div className="icon bg3">
                                    <i className="ri-leaf-line"></i>
                                </div>
                                <h3>fast and easy</h3>
                                <p>Either create an account in few steps, or use social authentication </p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
                            <div className="single-features-item">
                                <div className="icon bg4">
                                    <i className="ri-secure-payment-line"></i>
                                </div>
                                <h3>Fully Secured</h3>
                                <p>your privacy and monetary transaction will be in good hands</p>
                            </div>
                        </div>

                    

                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
                            <div className="single-features-item">
                                <div className="icon bg6">
                                    <i className="ri-pie-chart-2-line"></i>
                                </div>
                                <h3>Agenda synchronization</h3>
                                <p>Our app can be synchronized with phone agendas like "Google Agenda"</p>
                            </div>
                        </div>
 
                       
                        
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
                            <div className="single-features-item">
                                <div className="icon bg5">
                                    <i className="ri-lightbulb-flash-line"></i>
                                </div>
                                <h3>Lightweight App</h3>
                                <p>As small as any social media app but offers greater opportunities</p>
                            </div>
                        </div>

 
                        <div className="col-xl-12 col-lg-12 col-sm-12 col-md-12">
                            <div className="view-more-box">
                                <a href="https://play.google.com/store/apps" className="default-btn" target="_blank">Start Free Trial</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <FooterStyleTwo/>
        </>
    )
}

export default Features;