import React from 'react'
import Link from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll'
import TrustedPartners from '@/components/HomeDemo1/TrustedPartners'

const MainBanner = () => {
    return (
        <>
            <div className="main-banner-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="main-banner-content">
                                <div className="content">
                                    <span className="sub-title">#Get your 14 days free trail</span>
                                    <h1>The Revolutionary App That Makes Your Life Easier Than Others Apps</h1>

                                    <Link href="/app-download">
                                        <a className="default-btn">Start Free Trial</a>
                                    </Link>
                                </div>
                                
                                {/* Trusted Partners Component */}
                                <TrustedPartners />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <ScrollAnimation animateIn='fadeInUp' duration={2} animateOnce={true} initiallyVisible={true}>
                                <div className="main-banner-image">
                                    <img src="/images/banner/banner-app1.png" alt="image" />
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>

                {/* Banner Images */}
                <div className="shape-overlay"></div>
                <div className="banner-shape1">
                    <img src="/images/shape/shape9.png" alt="image" />
                </div>
                <div className="banner-shape2">
                    <img src="/images/shape/shape7.png" alt="image" />
                </div>
                <div className="banner-shape3">
                    <img src="/images/shape/shape2.png" alt="image" />
                </div>
                <div className="banner-shape4">
                    <img src="/images/shape/shape10.png" alt="image" />
                </div>
                <div className="banner-shape5">
                    <img src="/images/shape/shape11.png" alt="image" />
                </div>
            </div>
        </>
    )
}

export default MainBanner;