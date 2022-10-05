import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const AppDownloadStyle2 = () => {
    return (
        <>
            <div className="app-download-area pb-100" id='app-download'>
                <div className="container">
                    <div className="app-download-inner bg-gray">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="app-download-content">
                                    <span className="sub-title">DOWNLOAD APP</span>
                                    <h2>Download bwd App now</h2>
                                    <p>Want to connect with people from your native country? Get Business with Diaspora social media App from Google Play or Apple Store for Free!</p>

                                    <div className="btn-box">
                                        <a href="https://play.google.com/store/apps" className="playstore-btn" target="_blank">
                                            <img src="/images/play-store.png" alt="image" />
                                            Soon available on
                                            <span>Google Play</span>
                                        </a>
                                        <a href="https://www.apple.com/app-store/" className="applestore-btn" target="_blank">
                                            <img src="/images/apple-store.png" alt="image" />
                                            Soon available on
                                            <span>Apple Store</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="app-download-image">
                                    <ScrollAnimation animateIn="fadeInUp">
                                        <img src="/images/screenshots/s7.png" alt="app-img" />
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppDownloadStyle2;