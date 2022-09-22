import React, { Component } from 'react';
import homedata from '../../data/home.json';


class FactsSection extends Component {

    render () {

        let factsInfo = homedata.funfacts
        let facts = factsInfo.facts
        let publicUrl = process.env.PUBLIC_URL

        const inlineStyle = {
            backgroundImage: 'url('+publicUrl+factsInfo.bgImg+')'
        }

        return <section id="facts-section" ref="counter" className="pt100 pb100 bg-parallax" style={inlineStyle}>
		<div className="color-overlay opacity-8"></div>
        <div className="container">
            <div className="row">
                {
                   facts.map( ( element, i ) => {
                        return (
                        <div key={i} className="col-md-3 col-sm-6">
                            <div className="single-counter text-center">
                                <i className={element.icon}></i>
                                <div className="counter-number"><span className="counter">{element.number}</span>{element.unit}</div>
                                <h4>{element.title}</h4>
                            </div>
                        </div>
                        )
                   } )
                }

            </div>
        </div>
        <div className="bottom-pattern d-none d-lg-block" >
            <img src={`${publicUrl}/assets/img/bg-pattern-light.png`} alt="ng pattren" />
        </div>
    </section>
    }
}


export default FactsSection
