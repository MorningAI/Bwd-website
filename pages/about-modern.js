import React from 'react'
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo'
import PageBannerStyle2 from '@/components/Common/PageBannerStyle2'
import AppProgressStyle4 from '@/components/Common/AppProgressStyle4'
import AppDownloadStyle1 from '@/components/Common/AppDownloadStyle1'
import FunfactStyleTwo from '@/components/Common/FunfactStyleTwo'
import ClientFeedbackStyle5 from '@/components/Feedbacks/ClientFeedbackStyle5'
import IntroVideo from '@/components/Common/IntroVideo'
import TeamMemberStyle2 from '@/components/Common/TeamMemberStyle2'
import SoftwareIntegrations from '@/components/Common/SoftwareIntegrations'
import PartnerStyle3 from '@/components/Common/PartnerStyle3'
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

            <AppProgressStyle4 />

            <AppDownloadStyle1 />

            <FunfactStyleTwo />

            <ClientFeedbackStyle5 />

            <div className="pt-100">
                <IntroVideo />
            </div>

            <TeamMemberStyle2 />

            <PartnerStyle3 />

            <SoftwareIntegrations />

            <FooterStyleTwo />
        </>
    )
}

export default AboutModern;