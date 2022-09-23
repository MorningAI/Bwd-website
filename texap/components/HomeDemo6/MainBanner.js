import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <>
            <div className="gradient-main-banner">
                <div className="container-fluid">
                    <div className="gradient-main-banner-inner">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="content">
                                    <span className="sub-title">#Get your 14 days free trail</span>
                                    <h1>The Revolutionary App That Makes Your Life Easier Than Others App</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id tincidunt eifend odio viverra diam aliquet donec again.</p>

                                    <Link href="/sign-in">
                                        <a className="default-btn">Start Free Trial</a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="image">
                                    <img src="/images/banner/banner-img4.png" alt="banner-img" />
                                </div>
                            </div>
                        </div>

                        {/* Shape Images */}
                        <div className="banner-shape2">
                            <img src="/images/shape/shape7.png" alt="image" />
                        </div>
                        <div className="banner-shape9">
                            <img src="/images/shape/shape21.png" alt="image" />
                        </div>
                        <div className="banner-shape10">
                            <img src="/images/shape/shape21.png" alt="image" />
                        </div>
                        <div className="banner-shape11">
                            <img src="/images/shape/shape22.png" alt="image" />
                        </div>
                        <div className="banner-shape3">
                            <img src="/images/shape/shape2.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainBanner;