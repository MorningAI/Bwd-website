import React, { Component } from 'react';
import homedata from '../../data/home.json';

class Contact extends Component {
    render() {

        let contactInfo = homedata.contact
        let sectionHeadingInfo = contactInfo.sectionHeading
        let publicUrl = process.env.PUBLIC_URL
        let inlineStyle = {
            backgroundImage: 'url('+publicUrl+contactInfo.bgImg+')'
        }



        return     <section id="contact" className="pt100 pb100 bg-parallax" style={inlineStyle}>
            
        <div className="color-overlay opacity-8"></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="contact-block text-center">
                        <div className="col-sm-12">
                            <h3>{sectionHeadingInfo.title}</h3>
                            <p className="subtitle">{sectionHeadingInfo.desc}</p>
                        </div>
						<form id="contact-form" method="post" action={`#`}>
							<div className="message col-lg-12">
								<p className="email-loading"><img src={`${publicUrl}/assets/img/loading.gif`} alt="loading" />&nbsp;&nbsp;&nbsp;Sending...</p>
								<p className="email-success"><i className="icon fa fa-check"></i> Your quote has successfully been sent.</p>
								<p className="email-failed"><i className="icon fa fa-times"></i> Something went wrong!</p>
							</div>
                            <div className="row">
                                <div className="col-md-6">
                                    <input name="name" className="contact-name form-control input-box" id="contact-name" type="text" placeholder="Your Name" required="" />
                                </div>
                                <div className="col-md-6">
                                    <input name="email" className="contact-email form-control input-box" id="contact-email" type="email" placeholder="Your Email" required="" />
                                </div>
                                <div className="col-sm-12">
                                    <input name="subject" className="contact-subject form-control input-box" id="contact-subject" type="text" placeholder="Subject" required="" />
                                </div>
                                <div className="col-sm-12">
                                    <textarea name="message" className="contact-message form-control textarea-box" id="contact-message" placeholder="Your Message" required=""></textarea>
                                </div>
                                <div className="col-sm-12">
                                    <button className="primary-btn"><i className="fa fa-paper-plane" aria-hidden="true"></i> {contactInfo.submitBtnLabel}</button>
                                </div>
                            </div>          
						</form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    }
}


export default Contact
