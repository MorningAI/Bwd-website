import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

const MainBanner = () => {
    return (
        <>
            <div className="banner-wrapper-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="banner-wrapper-content">
                                <span className="sub-title">Secure Application</span>
                                <h1>Manage All of Your Stuff Using a Texap</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id tincidunt eifend odio viverra diam aliquet donec again.</p>
                                <Link href="/contact">
                                    <a className="default-btn">Start Free Trial</a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="banner-wrapper-image">
                                <div className="banner-img">
                                    <img src="/images/banner/banner-img1.png" alt="banner-img" />
                                </div>
                                <div className="banner-img">
                                    <ScrollAnimation animateIn='fadeInLeft' animateOnce={true} initiallyVisible={true}>
                                        <img src="/images/banner/banner-img2.png" alt="banner-img" />
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape13">
                    <img src="/images/shape/shape15.png" alt="shape" />
                </div>
                <div className="shape14">
                    <img src="/images/shape/shape17.png" alt="shape" />
                </div>
                <div className="shape15">
                    <img src="/images/shape/shape18.png" alt="shape" />
                </div>
            </div>
        </>
    )
}

export default MainBanner;