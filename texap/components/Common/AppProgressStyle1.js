import React from 'react';
import Link from 'next/link';

const AppProgressStyle1 = () => {
    return (
        <>
            <div className="app-progress-area ptb-100" id='app-progress'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="app-progress-image text-center">
                                <img src="/images/app/app-img2.png" alt="app-img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="app-progress-content">
                                <span className="sub-title">PROGRESS</span>
                                <h2>Your big opportunity is right where you are now!</h2>
                                <p>bwd is a social media app where the diaspora all over the world can connect, and take part in events where they can find business opportunities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppProgressStyle1;