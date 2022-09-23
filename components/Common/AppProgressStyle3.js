import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

const AppProgressStyle3 = () => {
    return (
        <>
            <div className="app-progress-area pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="app-progress-animation-image">
                                <div className="app-img">
                                    <ScrollAnimation animateIn='fadeInDown' duration={2}>
                                        <img src="/images/app-progress/app-progress1.png" alt="app-progress" />
                                    </ScrollAnimation>
                                </div>

                                <div className="app-img">
                                    <ScrollAnimation animateIn='fadeInRight' duration={2}>
                                        <img src="/images/app-progress/app-progress2.png" alt="app-progress" />
                                    </ScrollAnimation>
                                </div>

                                <div className="app-img">
                                    <ScrollAnimation animateIn='fadeInLeft' duration={2}>
                                        <img src="/images/app-progress/app-progress3.png" alt="app-progress" />
                                    </ScrollAnimation>
                                </div>

                                <div className="app-img">
                                    <ScrollAnimation animateIn='fadeInUp' duration={2}>
                                        <img src="/images/app-progress/app-progress4.png" alt="app-progress" />
                                    </ScrollAnimation>
                                </div>

                                <div className="app-img main-image">
                                    <img src="/images/app-progress/progress-main.png" alt="app-progress" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="app-progress-content">
                                <span className="sub-title">APP PROGRESS</span>
                                <h2>Set Up The Challenges and Track Your Progress</h2>
                                <p>Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text. never missyour chance its just began. backup just log in with your mail account from.</p>
                                <p>Most provabily best  for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy  backup just log in with your mail account from.</p>
                                
                                <Link href="/sign-in">
                                    <a className="default-btn">Start Free Trial</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppProgressStyle3;