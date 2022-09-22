import React, { Component } from 'react';
import homedata from '../../data/home.json';

class Pricing extends Component {
    render () {

        let getPricingData = homedata.pricingTable
        let getSectionHeading = getPricingData.sectionHeading
        let getPricingTable = getPricingData.singleTable


        return     <section id="pricing" className="pt100 pb100 bg-light-gray">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-10 offset-lg-3 offset-md-2 offset-sm-1">
                    <div className="section-title text-center mb60">
                        <h2 dangerouslySetInnerHTML = {{__html: getSectionHeading.title}}></h2>
                        <hr className="lines" />
                        <p>{getSectionHeading.desc}</p>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    getPricingTable.map( ( element, i ) => {
                        return(
                            <div key={i} className="col-lg-4 col-md-6 col-sm-12">
                                <div className="single-package color-white text-center md-m-25px-b">
                                    <h4 className="package-head">{element.title}</h4>
                                    <div className="price">
                                        <h4><span className="sign">{element.currency}</span>{element.price} <span className="month">{element.duration}</span></h4>
                                    </div>
                                    <ul className="package-feature">
                                        {
                                          element.features.map( ( el, i ) => {
                                              return(
                                                <li key={i}>{el}</li>
                                              )
                                          } )  
                                        }
                                    </ul>
                                    <div className="clearfix"></div>
                                    <div className="download-btn">
                                        <a href={element.url} className="primary-btn primary-btn-2">{element.btnLabel}</a>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        )
                    } )
                }
                
            </div>
        </div>
    </section>
    }
}


export default Pricing
