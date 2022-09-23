import React from 'react'
import NavbarStyleThree from '@/components/_App/NavbarStyleThree'
import PageBannerStyle3 from '@/components/Common/PageBannerStyle3'
import AppDownloadStyle3 from '@/components/Common/AppDownloadStyle3'
import FooterStyleOne from '@/components/_App/FooterStyleOne'
 
const Features2 = () => {
    return (
        <>
            <NavbarStyleThree /> 

            <PageBannerStyle3 
                pageTitle="Features"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Features"
            />

            <div className="features-area pt-100 pb-75">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="single-features-box">
                                <div className="icon">
                                    <i className="ri-smartphone-line"></i>
                                </div>
                                <h3>User Friendly</h3>
                                <p>Most provably best dashboard design for your business you can try.</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="single-features-box">
                                <div className="icon bg2">
                                    <i className="ri-award-line"></i>
                                </div>
                                <h3>Award Winning App</h3>
                                <p>Most provably best dashboard design for your business you can try.</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="single-features-box">
                                <div className="icon bg3">
                                    <i className="ri-fingerprint-line"></i>
                                </div>
                                <h3>Privacy Protected</h3>
                                <p>Most provably best dashboard design for your business you can try.</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="single-features-box">
                                <div className="icon bg4">
                                    <i className="ri-vip-diamond-line"></i>
                                </div>
                                <h3>Lifetime Update</h3>
                                <p>Most provably best dashboard design for your business you can try.</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="single-features-box">
                                <div className="icon bg4">
                                    <i className="ri-eye-line"></i>
                                </div>
                                <h3>High Resolution</h3>
                                <p>Most provably best dashboard design for your business you can try.</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="single-features-box">
                                <div className="icon bg3">
                                    <i className="ri-stack-line"></i>
                                </div>
                                <h3>Retina Ready Screen</h3>
                                <p>Most provably best dashboard design for your business you can try.</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="single-features-box">
                                <div className="icon bg2">
                                    <i className="ri-leaf-line"></i>
                                </div>
                                <h3>Easy Editable Data</h3>
                                <p>Most provably best dashboard design for your business you can try.</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="single-features-box">
                                <div className="icon">
                                    <i className="ri-secure-payment-line"></i>
                                </div>
                                <h3>Fully Secured</h3>
                                <p>Most provably best dashboard design for your business you can try.</p>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="single-features-box">
                                <div className="icon">
                                    <i className="ri-cloud-line"></i>
                                </div>
                                <h3>Cloud Storage</h3>
                                <p>Most provably best dashboard design for your business you can try.</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="single-features-box">
                                <div className="icon bg2">
                                    <i className="ri-pie-chart-2-line"></i>
                                </div>
                                <h3>Responsive Ready</h3>
                                <p>Most provably best dashboard design for your business you can try.</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="single-features-box">
                                <div className="icon bg3">
                                    <i className="ri-group-line"></i>
                                </div>
                                <h3>User Friendly</h3>
                                <p>Most provably best dashboard design for your business you can try.</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="single-features-box">
                                <div className="icon bg4">
                                    <i className="ri-lightbulb-flash-line"></i>
                                </div>
                                <h3>Lightweight App</h3>
                                <p>Most provably best dashboard design for your business you can try.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
            <AppDownloadStyle3 />
          
            <FooterStyleOne />
        </>
    )
}

export default Features2;