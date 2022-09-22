import React, { Component } from 'react';
import homedata from '../../data/home.json';

class SpecialFeatures extends Component {
    render() {

        let getSpecialFeatures = homedata.specialFeatures
        let publicUrl = process.env.PUBLIC_URL

        const inlineStyle = {
            backgroundImage : 'url('+publicUrl+getSpecialFeatures.bgImg+')'
        }

        return <section id="special-features" className="pt100 pb100 bg-parallax" style={inlineStyle}>
        <div className="color-overlay opacity-8"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2 aboutIntroText color-white text-center">
                    <h2 className="m-30px-b">{getSpecialFeatures.title}</h2>
                    <p className="m-50px-b md-m-30px-b">
                    {getSpecialFeatures.desc}
                    </p>
                    <a href={getSpecialFeatures.btnUrl} className="primary-btn">{getSpecialFeatures.btnLabel}</a>
                    <a href={getSpecialFeatures.btnUrl} className="primary-btn primary-btn-3">Download now</a>
					
                </div>
            </div>
        </div>
        <div className="bottom-pattern d-none d-lg-block" >
            <img src={`${publicUrl}/assets/img/bg-pattern-light.png`} alt="ng pattren" />
        </div>
    </section>
    }
}


export default SpecialFeatures
