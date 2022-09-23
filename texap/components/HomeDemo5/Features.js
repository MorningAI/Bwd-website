import React from 'react';

const Features = () => {
    return (
        <>
            <div className="features-area pb-100">
                <div className="container">
                    <div className="features-inner">
                        <div className="row justify-content-center">
                            <div className="col-xl-3 col-lg-3 col-sm-6 col-md-3 col-6">
                                <div className="features-box">
                                    <div className="icon">
                                        <i className="ri-smartphone-line"></i>
                                    </div>
                                    <h3>User Friendly</h3>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-sm-6 col-md-3 col-6">
                                <div className="features-box">
                                    <div className="icon bg2">
                                        <i className="ri-award-line"></i>
                                    </div>
                                    <h3>Award Winning App</h3>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-sm-6 col-md-3 col-6">
                                <div className="features-box">
                                    <div className="icon bg3">
                                        <i className="ri-fingerprint-line"></i>
                                    </div>
                                    <h3>Privacy Protected</h3>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-sm-6 col-md-3 col-6">
                                <div className="features-box">
                                    <div className="icon bg4">
                                        <i className="ri-vip-diamond-line"></i>
                                    </div>
                                    <h3>Lifetime Update</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features;