import React from 'react';
import Link from 'next/link';

const AppProgressStyle1 = () => {
    return (
        <>
            <div className="app-progress-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="app-progress-image text-center">
                                <img src="/images/app/app-img2.png" alt="app-img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="app-progress-content">
                                <span className="sub-title">APP PROGRESS</span>
                                <h2>Set Up The Challenges and Track Your Progress</h2>
                                <p>Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text. never missyour chance its just began. backup just log in with your mail account from.</p>
                                <p>Most provabily best  for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy  backup just log in with your mail account from.</p>

                                <Link href="/app-download">
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

export default AppProgressStyle1;