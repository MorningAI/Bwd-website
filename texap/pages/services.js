import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import AppDownloadStyle1 from '@/components/Common/AppDownloadStyle1'
import KeyFeatures from '@/components/HomeDemo1/KeyFeatures'
import FooterStyleOne from '@/components/_App/FooterStyleOne' 
 
const Services = () => {
    return (
        <>
            <NavbarStyleOne /> 

            <PageBannerStyle1 
                pageTitle="Services"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Services"
            />

            <div className="features-area pt-100 pb-75">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="features-item">
                                <div className="icon">
                                    <i className="ri-eye-line"></i>
                                </div>
                                <h3>High Resolution</h3>
                                <p>Just log in with your mail account from play store and using whatever you want for your able business purpose.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="features-item">
                                <div className="icon bg2">
                                    <i className="ri-stack-line"></i>
                                </div>
                                <h3>Retina Ready Screen</h3>
                                <p>Just log in with your mail account from play store and using whatever you want for your able business purpose.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="features-item">
                                <div className="icon bg3">
                                    <i className="ri-leaf-line"></i>
                                </div>
                                <h3>Easy Editable Data</h3>
                                <p>Just log in with your mail account from play store and using whatever you want for your able business purpose.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="features-item">
                                <div className="icon bg4">
                                    <i className="ri-secure-payment-line"></i>
                                </div>
                                <h3>Fully Secured</h3>
                                <p>Just log in with your mail account from play store and using whatever you want for your able business purpose.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="features-item">
                                <div className="icon bg5">
                                    <i className="ri-cloud-line"></i>
                                </div>
                                <h3>Cloud Storage</h3>
                                <p>Just log in with your mail account from play store and using whatever you want for your able business purpose.</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="features-item">
                                <div className="icon bg6">
                                    <i className="ri-pie-chart-2-line"></i>
                                </div>
                                <h3>Responsive Ready</h3>
                                <p>Just log in with your mail account from play store and using whatever you want for your able business purpose.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <KeyFeatures />

            <div className="ptb-100">
                <AppDownloadStyle1 />
            </div>
 
            <FooterStyleOne />
        </>
    )
}

export default Services;