import React, { Component } from 'react';
import Countdown from 'react-countdown-now';

class ComingSoon extends Component {
    render() {

        let getData = this.props.data
        let publicUrl = process.env.PUBLIC_URL
     
        const inlineStyle = {
            backgroundImage: 'url('+publicUrl+getData.bgImg+')'
        }

        return (
            <section className="pt100 pb100 hero-full-screen extra-page-wrapper bg-parallax color-white" style={inlineStyle}>
            <div className="color-overlay opacity-8"></div>
            <div className="cloud x1"></div>
            <div className="cloud x2"></div>
            <div className="cloud x3"></div>
            <div className="cloud x4"></div>
            <div className="cloud x5"></div>
            <div className="cloud x6"></div>
            <div className="cloud x7"></div>
            <div className="cloud x8"></div>
            <div className="cloud x9"></div>
            <div className="cloud x10"></div>
            <div className="display-table">
                <div className="table-cell">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="extra-page-content text-center">
                                    <a className="logo" href={getData.siteUrl}><img src={publicUrl+getData.logoImg} alt={getData.title} /></a>
                                    <h2 className="m-30px-b">{getData.title}</h2>
                                    
                                    <Countdown date={getData.launchDate} renderer={props => 
                                    <div id="launch-timer" className="countdown-timer"><ul><li><span>{props.days}</span> day</li><li><span>{props.hours}</span> hour</li><li><span>{props.minutes}</span> minute</li><li><span>{props.seconds}</span> second</li></ul></div>
                                    } />
                                    <h4>{getData.shortTitle}</h4>
                                    <div className="col-sm-6 offset-3">
                                        <form action="subscribe/subscribe.php" className="subscription-form form-inline d-flex justify-content-center" id="subscribe">
                                            <input type="email" name="email"  placeholder="Your Email" className="form-control input-box" id="subscriber-email" />
                                            <button type="submit" className="primary-btn" id="subscribe-button">{getData.btnLabel}</button>
                                            <div className="result">
                                                <p className="success-msg"><i className="icon fa fa-check"></i> You email has been stored!</p>
                                                <p className="error-msg"><i className="icon fa fa-times"></i> Sorry! Something went wrong!</p>
                                            </div>
                                        </form>
                                        {/**
                                        <form action="#" id="subscribe-mailchimp" className="subscription-form form-inline">
                                                <input type="email" name="email"  placeholder="Your Email" className="form-control input-box">
                                                <button type="submit" className="primary-btn">Subscribe</button>
                                                <div className="result">
                                                    <p className="success-msg"><i className="icon fa fa-check"></i> You email has been stored!</p>
                                                    <p className="error-msg"><i className="icon fa fa-times"></i> Sorry! Something went wrong!</p>
                                                </div>
                                        </form>
                                        * */
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}



export default ComingSoon
