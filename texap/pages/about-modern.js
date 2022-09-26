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
                                <h2>Most Probably You Are Getting The Best App Ever</h2>

                                <div className="features-text">
                                    <h6>Our App</h6>
                                    <p>Our app will be the relay between members of the diaspora, and the 
                                    community of their native countries and other countries to enhance business opportunities and knowledge sharing.</p>
                                </div>

                                <div className="features-text">
                                    <h6>Our Mission</h6>
                                    <p>Is to develop the community contribution of diasporas in the world.</p>
                                </div>

                                <div className="btn-box">
                                    <Link href="https://play.google.com/store/apps">
                                        <a className="default-btn">Get the app</a>
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