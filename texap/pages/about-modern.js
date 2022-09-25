import React from 'react'
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo'
import PageBannerStyle2 from '@/components/Common/PageBannerStyle2'
import FooterStyleTwo from '@/components/_App/FooterStyleTwo'
import Link from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll'

const AboutModern = () => {
    return (
        <>
            <NavbarStyleTwo /> 
            <PageBannerStyle2 
                pageTitle="About Us"
                homePageUrl="/"
                homePageText="Home"
                activePageText="About Us"
            />
            <div className="about-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <span className="sub-title">ABOUT US</span>
                                <h2>Most Probably You Are Getting Best App Ever</h2>
                                <p>Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text. Never missyour chance its just began.</p>
                                
                                <div className="features-text">
                                    <h6>Our App</h6>
                                    <p>Most provabily best you can trust on it, just log in with your mail account from play store and using whatever you want for your business.</p>
                                </div>

                                <div className="features-text">
                                    <h6>Our Mission</h6>
                                    <p>Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy of your business purpose text.</p>
                                </div>

                                <div className="btn-box">
                                    <Link href="https://play.google.com/store/apps">
                                        <a className="default-btn">Start Free Trial</a>
                                    </Link>
                                    <Link href="/features">
                                        <a className="link-btn">See All Features</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-img">
                                <ScrollAnimation animateIn='fadeInUp'>
                                    <img src="/images/app/app-img8.png" alt="about" />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <FooterStyleTwo />
        </>
    )
}

export default AboutModern;