import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const MainBanner = () => {
    return (
        <>
            <div className="gradient-banner-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="gradient-banner-content">
                                <h1> develop the community contribution of diasporas in the world</h1>
                                <p>The communication relay between members of the diaspora, and the 
                                    community of their native countries and other countries.</p>
                                
                                {/* <form onSubmit={e => e.preventDefault()}>
                                    <input 
                                        type="text" 
                                        className="input-newsletter" 
                                        placeholder="Enter Your Email Address" 
                                        name="email" 
                                    />
                                    <button type="submit" className="default-btn">Get Started</button>
                                </form> */}
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <ScrollAnimation animateIn='fadeInUp' duration={2} animateOnce={true} initiallyVisible={true}>
                                <div className="gradient-banner-image">
                                    <img src="/images/banner/bannner.png" alt="banner-img" />
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="banner-shape1">
                    <img src="/images/shape/shape9.png" alt="image" />
                </div>
                <div className="banner-shape2">
                    <img src="/images/shape/shape7.png" alt="image" />
                </div>
            </div>
        </>
    )
}

export default MainBanner;