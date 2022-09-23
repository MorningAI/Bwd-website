import React from 'react';
import Link from 'next/link';

const BestAppEver = () => {
    return (
        <>
            <div className="overview-area">
                <div className="container-fluid">
                    <div className="row m-0">
                        <div className="col-xl-6 col-lg-12 col-md-12 p-0">
                            <div className="overview-content">
                                <h2>Most Probably You Are Getting Best App Ever</h2>
                                <p>Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text. Never missyour chance its just began.</p>

                                <ul className="features-list">
                                    <li>
                                        <div className="icon">
                                            <i className="ri-download-cloud-2-line"></i>
                                        </div>
                                        <h3>Free Download App</h3>
                                        <p>Just log in with your mail account from play store and using whatever you want for your business purpose.</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="ri-award-line"></i>
                                        </div>
                                        <h3>Trusted and Reliable</h3>
                                        <p>Most provabily best you can trust on it, just log in with your mail account from play store and using whatever you want for your business.</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="ri-cloud-line"></i>
                                        </div>
                                        <h3>Cloud Storage</h3>
                                        <p>Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy.</p>
                                    </li>
                                </ul>

                                <div className="btn-box">
                                    <Link href="/sign-in">
                                        <a className="default-btn">Start Free Trial</a>
                                    </Link>
                                    <Link href="/features">
                                        <a className="link-btn">See All Features</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-12 col-md-12 p-0">
                            <div className="overview-image bg2">
                                <img src="/images/overview2.jpg" alt="overview" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestAppEver;