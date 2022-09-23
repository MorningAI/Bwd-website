import React from 'react';

const Features = () => {
    return (
        <>
            <div className="features-area pt-100 pb-75">
                <div className="container">
                    <ul className="features-boxes-list">
                        <li>
                            <div className="features-list-box">
                                <div className="icon">
                                    <i className="ri-smartphone-line"></i>
                                </div>
                                <h3>User Friendly</h3>
                            </div>
                        </li>
                        <li>
                            <div className="features-list-box">
                                <div className="icon bg2">
                                    <i className="ri-award-line"></i>
                                </div>
                                <h3>Award Winning App</h3>
                            </div>
                        </li>
                        <li>
                            <div className="features-list-box">
                                <div className="icon bg3">
                                    <i className="ri-fingerprint-line"></i>
                                </div>
                                <h3>Privacy Protected</h3>
                            </div>
                        </li>
                        <li>
                            <div className="features-list-box">
                                <div className="icon">
                                    <i className="ri-vip-diamond-fill"></i>
                                </div>
                                <h3>Lifetime Update</h3>
                            </div>
                        </li>
                        <li>
                            <div className="features-list-box">
                                <div className="icon bg4">
                                    <i className="ri-customer-service-2-line"></i>
                                </div>
                                <h3>24/7 Support</h3>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Features;