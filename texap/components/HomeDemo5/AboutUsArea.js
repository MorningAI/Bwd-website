import React from 'react'
import Link from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll'

const AboutUsArea = () => {
    return (
        <>
            <div className="about-area pb-100" id='about-us'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <span className="sub-title">ABOUT US</span>
                                <h2>What is Business with Diaspora?</h2>
                                <p>bwd is a social media app that connects the diaspora with the community of their native countries.</p>

                                <div className="features-text">
                                    <h6>Events</h6>
                                    <p>With the bwd social media app, you can find events that match your interests with people from your native country.
                                        Plus you can subscribe and see who is coming to these events.</p>
                                </div>

                                <div className="features-text">
                                    <h6>Why Business in Business with Diaspora?</h6>
                                    <p>With bwd, it’s easier to find and join events where you can find business opportunities.</p>
                                </div>

                                {/* <div className="btn-box">
                                    <Link href="/sign-up">
                                        <a className="default-btn">Start Free Trial</a>
                                    </Link>
                                    <Link href="/features">
                                        <a className="link-btn">See All Features</a>
                                    </Link>
                                </div> */}
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <ScrollAnimation animateIn='fadeInUp'>
                                    <img width={375} src="/images/screenshots/s8.png" alt="about" />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsArea;