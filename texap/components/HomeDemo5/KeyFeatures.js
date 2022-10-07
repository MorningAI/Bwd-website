import React from 'react';

const KeyFeatures = () => {
    return (
        <React.Fragment>
            <div className="features-area pb-75" id='key-features'>
                <div className="container">
                    <div className="section-title">
                        <h2>KEY FEATURES</h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="features-item with-border">
                                <div className="icon">
                                    <i className="ri-group-line"></i>
                                </div>
                                <h3>Network</h3>
                                <p>Find and connect with people who share the same culture as you!</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="features-item with-border">
                                <div className="icon bg2">
                                    <i className="ri-message-2-line"></i>
                                </div>
                                <h3>Chat</h3>
                                <p>bwd makes it easy to stay close to your community.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="features-item with-border">
                                <div className="icon bg5">
                                    <i className="ri-star-fill"></i>
                                </div>
                                <h3>Subscription</h3>
                                <p>Manage subscriptions for the events you create, or just subscribe to the next events you’re joining.</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="features-item with-border">
                                <div className="icon bg6">
                                    <i className="ri-calendar-2-fill"></i>
                                </div>
                                <h3>Events</h3>
                                <p>This is the perfect place for you whether you want to find events created by people from your native country or to create one.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default KeyFeatures;