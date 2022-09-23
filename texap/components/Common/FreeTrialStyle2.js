import React from 'react';

const FreeTrialStyle2 = () => {
    return (
        <>
            <div className="free-trial-area">
                <div className="container">
                    <div className="free-trial-content bg-color">
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

                        {/* Shape Images */}
                        <div className="shape8">
                            <img src="/images/shape/shape7.png" alt="shape" />
                        </div>
                        <div className="shape9">
                            <img src="/images/shape/shape8.png" alt="shape" />
                        </div>

                        {/* Animation lines */}
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

export default FreeTrialStyle2;