import React, { Component } from 'react';
import homedata from '../../data/home.json';

class About extends Component {
    render() {

        let aboutContent = homedata.about
        let sectionHeadingInfo = aboutContent.sectionHeading
        let aboutFeaturesInfo = aboutContent.aboutFeatures
        
        return <section id="about" className="pt100 pb100 bg-light-gray">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-10 offset-lg-3 offset-md-2 offset-sm-1">
                    <div className="section-title text-center mb60">
                        <h2 dangerouslySetInnerHTML={{__html: sectionHeadingInfo.title}}></h2>
                        <hr className="lines"/>
                        <p>{sectionHeadingInfo.desc}</p>
                    </div>
                </div>
            </div>
            <div className="row about-boxes">
                {
                    aboutFeaturesInfo.map( ( info, i ) => {
                        return(
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="media flex-column">
                                    <div className="media-icon m-auto">
                                        <i className={info.icon}></i>
                                    </div>
                                    <div className="media-body m-20px-t">
                                        <h5>{info.title}</h5>
                                        <p>{info.desc}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    } )
                }

            </div>
        </div>
    </section>
    }
}


export default About
