import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import FunfactStyleOne from '@/components/Common/FunfactStyleOne'
import AppProgressStyle2 from '@/components/Common/AppProgressStyle2'
import SoftwareIntegrationsTwo from '@/components/Common/SoftwareIntegrationsTwo'
import TeamMemberStyle1 from '@/components/Common/TeamMemberStyle1'
import PartnerStyle3 from '@/components/Common/PartnerStyle3'
import ClientFeedbackStyle1 from '@/components/Feedbacks/ClientFeedbackStyle1'
import FooterStyleOne from '@/components/_App/FooterStyleOne'
import Link from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll'
 
const AboutSimple = () => {
    return (
        <>
            <NavbarStyleOne /> 

            <PageBannerStyle1 
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
                                <span className="sub-title">ABOUT TEXAP</span>
                                <h2>A Few Words About Us</h2>
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

            <FunfactStyleOne />

            <AppProgressStyle2 />

            <div className="stats-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">OUR STATS</span>
                        <h2>Total User In This World</h2>
                    </div>
                    <div className="stats-map text-center">
                        <img src="/images/map.png" alt="map" />
                    </div>
                </div>
            </div>

            <SoftwareIntegrationsTwo />

            <TeamMemberStyle1 />

            <PartnerStyle3 />

            <ClientFeedbackStyle1 />

            <FooterStyleOne />
        </>
    )
}

export default AboutSimple;