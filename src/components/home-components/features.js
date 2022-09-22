import React, { Component } from 'react';
import homedata from '../../data/home.json';

class Features extends Component {
    render () {

        let factsInfo = homedata.features
        let sectionHeadingInfo = factsInfo.sectionHeading
        let featureContent = factsInfo.singleFeature
        let publicUrl = process.env.PUBLIC_URL


        return     <section id="features" className="pt100 pb100">
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
            <div className="row align-items-center">

                <div className="col-lg-5 text-center md-m-15px-b">
                    <img className="img-fluid" src={publicUrl+featureContent.image} alt={`features`} />
                </div>

                <div className="col-lg-7">
                    <div className="row">
                        <div className="col-md-6">
                            {
                                featureContent.featurePart1.map( ( element, i ) => {
                                    return(

                                    <div key={i} className="media single-feature-item">
                                        <div className="feature-icon">
                                            <i className={element.icon}></i>
                                        </div>
                                        <div className="media-body">
                                            <h5>{element.title}</h5>
                                            <p>{element.desc}</p>
                                        </div>
                                    </div>
                                    )
                                } )
                            }
                        </div>

                        <div className="col-md-6">
                            {
                                featureContent.featurePart2.map( ( element, i ) => {
                                    return(
                                        <div key={i} className="media single-feature-item">
                                            <div className="feature-icon">
                                                <i className={element.icon}></i>
                                            </div>
                                            <div className="media-body">
                                                <h5>{element.title}</h5>
                                                <p>{element.desc}</p>
                                            </div>
                                        </div>
                                    )
                                } )
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    }
}


export default Features
