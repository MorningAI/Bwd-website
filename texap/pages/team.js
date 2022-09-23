import React from 'react'
import NavbarStyleOne from '@/components/_App/NavbarStyleOne'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import PartnerStyle3 from '@/components/Common/PartnerStyle3'
import FooterStyleOne from '@/components/_App/FooterStyleOne'
 
const Team = () => {
    return (
        <>
            <NavbarStyleOne /> 

            <PageBannerStyle1 
                pageTitle="Team"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Team"
            />

            <div className="team-area pt-100 pb-75">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="single-team-box">
                                <div className="image">
                                    {/* Update the team image from public/css/pages-and-components-css/team.scss */}
                                    <div className="bg-1"></div>
                                </div>
                                <div className="content">
                                    <h3>Sarah Taylor</h3>
                                    <span>Marketing Lead</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="single-team-box">
                                <div className="image">
                                    <div className="bg-2"></div>
                                </div>
                                <div className="content">
                                    <h3>Ben Stokes</h3>
                                    <span>Art Director</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="single-team-box">
                                <div className="image">
                                    <div className="bg-3"></div>
                                </div>
                                <div className="content">
                                    <h3>Ellyse Perry</h3>
                                    <span>Designer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="single-team-box">
                                <div className="image">
                                    <div className="bg-4"></div>
                                </div>
                                <div className="content">
                                    <h3>Steven Smith</h3>
                                    <span>Development</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="single-team-box">
                                <div className="image">
                                    <div className="bg-5"></div>
                                </div>
                                <div className="content">
                                    <h3>Suzie Bates</h3>
                                    <span>Front-End Development</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="single-team-box">
                                <div className="image">
                                    <div className="bg-6"></div>
                                </div>
                                <div className="content">
                                    <h3>David Warner</h3>
                                    <span>Head of Team</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="single-team-box">
                                <div className="image">
                                    <div className="bg-7"></div>
                                </div>
                                <div className="content">
                                    <h3>Ross Taylor</h3>
                                    <span>Front-End Developer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="single-team-box">
                                <div className="image">
                                    <div className="bg-8"></div>
                                </div>
                                <div className="content">
                                    <h3>Meg Lanning</h3>
                                    <span>Art Director</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="single-team-box">
                                <div className="image">
                                    <div className="bg-9"></div>
                                </div>
                                <div className="content">
                                    <h3>Du Plessis</h3>
                                    <span>Designer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="single-team-box">
                                <div className="image">
                                    <div className="bg-10"></div>
                                </div>
                                <div className="content">
                                    <h3>Ellyse Perry</h3>
                                    <span>Development</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="single-team-box">
                                <div className="image">
                                    <div className="bg-11"></div>
                                </div>
                                <div className="content">
                                    <h3>Kagiso Steyn</h3>
                                    <span>Front-End Development</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PartnerStyle3 />
  
            <FooterStyleOne />
        </>
    )
}

export default Team;