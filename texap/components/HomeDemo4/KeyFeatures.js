import React from 'react';
import Link from 'next/link';

const KeyFeatures = () => {
    return (
        <>
            <div className="features-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">KEY FEATURES</span>
                        <h2>Most Probably Included Best Features Ever</h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
                            <div className="single-features-item without-hover">
                                <div className="icon">
                                    <i className="ri-eye-line"></i>
                                </div>
                                <h3>High Resolution</h3>
                                <p>Just log in with your mail account from play store and using whatever you want for your able business purpose.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
                            <div className="single-features-item without-hover">
                                <div className="icon bg2">
                                    <i className="ri-stack-line"></i>
                                </div>
                                <h3>Retina Ready Screen</h3>
                                <p>Just log in with your mail account from play store and using whatever you want for your able business purpose.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
                            <div className="single-features-item without-hover">
                                <div className="icon bg3">
                                    <i className="ri-leaf-line"></i>
                                </div>
                                <h3>Easy Editable Data</h3>
                                <p>Just log in with your mail account from play store and using whatever you want for your able business purpose.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
                            <div className="single-features-item without-hover">
                                <div className="icon bg4">
                                    <i className="ri-secure-payment-line"></i>
                                </div>
                                <h3>Fully Secured</h3>
                                <p>Just log in with your mail account from play store and using whatever you want for your able business purpose.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
                            <div className="single-features-item without-hover">
                                <div className="icon bg5">
                                    <i className="ri-cloud-line"></i>
                                </div>
                                <h3>Cloud Storage</h3>
                                <p>Just log in with your mail account from play store and using whatever you want for your able business purpose.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
                            <div className="single-features-item without-hover">
                                <div className="icon bg6">
                                    <i className="ri-pie-chart-2-line"></i>
                                </div>
                                <h3>Responsive Ready</h3>
                                <p>Just log in with your mail account from play store and using whatever you want for your able business purpose.</p>
                            </div>
                        </div>

                        <div className="col-xl-12 col-lg-12 col-sm-12 col-md-12">
                            <div className="text-center">
                                <Link href="/sign-in">
                                    <a className="default-btn">Start Free Trial</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KeyFeatures;