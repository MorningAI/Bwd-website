import React from 'react';

const FreeTrialStyle3 = () => {
    return (
        <>
            <div className="free-trial-area">
                <div className="container">
                    <div className="free-trial-inner">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="content">
                                    <span className="sub-title">FREE TRIAL</span>
                                    <h2>Start Your 14 Days Free Trials Today!</h2>

                                    <form className="free-trial-form" onSubmit={e => e.preventDefault()}>
                                        <input 
                                            type="text" 
                                            className="input-newsletter" 
                                            placeholder="Enter Your Email Address" 
                                            name="email" 
                                        />
                                        <button type="submit" className="default-btn">Get Started</button>
                                    </form>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="image">
                                    <img src="/images/app/app-img6.png" alt="free-trial" />
                                </div>
                            </div>
                        </div>

                        {/* Shape Images */}
                        <div className="shape8">
                            <img src="/images/shape/shape7.png" alt="shape" />
                        </div>
                        <div className="shape9">
                            <img src="/images/shape/shape8.png" alt="shape" />
                        </div>

                        <div className="lines">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FreeTrialStyle3;