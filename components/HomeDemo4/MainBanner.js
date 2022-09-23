import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <>
            <div className="main-banner">
                <div className="container">
                    <div className="content">
                        <span className="sub-title">Get your 14 days free trail</span>
                        <h1>The Revolutionary App That Makes Your Life Easier Than Others</h1>

                        <Link href="/sign-in">
                            <a className="default-btn">Start Free Trial</a>
                        </Link>

                        <img src="/images/banner/banner-app3.png" alt="image" />
                    </div>
                </div>

                <div className="divider"></div>

                {/* Shape Images */}
                <div className="banner-shape3">
                    <img src="/images/shape/shape2.png" alt="image" />
                </div>
                <div className="banner-shape8">
                    <img src="/images/shape/shape11.png" alt="image" />
                </div>
                <div className="banner-shape7">
                    <img src="/images/shape/shape11.png" alt="image" />
                </div>
            </div>
        </>
    )
}

export default MainBanner;