import React, { Component } from 'react';
import homedata from '../../data/home.json';

class Subscribe extends Component {
    render() {

        let getSubscriptionData = homedata.subscription
        let downloadAppsInfo = homedata.downloadApps
        let sectionHeadingInfo = downloadAppsInfo.sectionHeading

        return     <section id="subscription" className="pt100 pb100 bg-light-gray">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 text-center subscribe-area md-m-50px-b">
                    <div className="subscribe-wrap p-25px">
                    <h4 className="m-15px-b">{getSubscriptionData.title}</h4>
                    <p>
                        {getSubscriptionData.shortDesc}
                    </p>
					<form action={`#`} className="subscription-form form-inline d-flex justify-content-center" id="subscribe">

						<input type="email" name="email"  placeholder="Your Email" className="form-control input-box" id="subscriber-email"/>
						<button type="submit" className="primary-btn" id="subscribe-button">Subscribe</button>
						
						<div className="result">
							<p className="success-msg"><i className="icon fa fa-check"></i> You email has been stored!</p>
							<p className="error-msg"><i className="icon fa fa-times"></i> Sorry! Something went wrong!</p>
						</div>
					</form>
                    </div>
					{/** 
					<form action="#" id="subscribe-mailchimp" class="subscription-form form-inline">
							<input type="email" name="email"  placeholder="Your Email" class="form-control input-box">
							<button type="submit" class="primary-btn">Subscribe</button>
							<div class="result">
								<p class="success-msg"><i class="icon fa fa-check"></i> You email has been stored!</p>
								<p class="error-msg"><i class="icon fa fa-times"></i> Sorry! Something went wrong!</p>
							</div>
					</form>
                    **/}
                </div>

                <div className="col-lg-7 text-center">
                        <h4 className="m-15px-b" dangerouslySetInnerHTML={{__html:sectionHeadingInfo.title}}></h4>
                        <p>{sectionHeadingInfo.desc}</p>
                        {
                            downloadAppsInfo.buttons.map( ( data, i ) => {
                                return(
                                    <a key={i} href={data.url} className="primary-btn apps-btn"><i className={data.icon} aria-hidden="true"></i>  <i dangerouslySetInnerHTML = {{__html:data.btnlabel}}></i></a>
                                )
                            } )
                        }
                </div>

            </div>
            {/* <div className="row">
                <div className="col-sm-8 offset-sm-2 text-center download-area">
                    <h3>{getSubscriptionData.downloadTitle}</h3>
                    <p>
                        {getSubscriptionData.downloadDesc}
                    </p>
                    {
                        getSubscriptionData.buttons.map( ( element, i ) => {
                            return(
                                <a key={i} href={element.url} className="primary-btn wow zoomIn" data-wow-duration={element.animation}><i className={element.icon} aria-hidden="true"></i> {element.btnlabel}</a>

                            )
                        } )
                    }
                </div>
            </div> */}
        </div>
    </section>
    }
}


export default Subscribe
