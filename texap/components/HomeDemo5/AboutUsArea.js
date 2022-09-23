import React from 'react'
import Link from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll'

const AboutUsArea = () => {
    return (
        <>
            <div className="about-area pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <span className="sub-title">ABOUT US</span>
                                <h2>Most Probably You Are Getting Best App Ever</h2>
                                <p>Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text. Never missyour chance its just began.</p>

                                <div className="features-text">
                                    <h6>Trusted and Reliable</h6>
                                    <p>Most provabily best you can trust on it, just log in with your mail account from play store and using whatever you want for your business.</p>
                                </div>

                                <div className="features-text">
                                    <h6>Cloud Storage</h6>
                                    <p>Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy of your business purpose text.</p>
                                </div>

                                <div className="btn-box">
                                    <Link href="/sign-up">
                                        <a className="default-btn">Start Free Trial</a>
                                    </Link>
                                    <Link href="/features">
                                        <a className="link-btn">See All Features</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <ScrollAnimation animateIn='fadeInUp'>
                                    <img src="/images/app/app-img7.png" alt="about" />
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