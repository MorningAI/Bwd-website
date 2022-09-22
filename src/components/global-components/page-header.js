import React, { Component } from 'react';
import pageHeaderData from '../../data/page-header'

class PageHeader extends Component {
    render() {
        
        let getData = pageHeaderData
        let publicUrl = process.env.PUBLIC_URL

        const inlineStyle = {
            backgroundImage: 'url('+publicUrl+getData.bgimg+')'
        }

        return (
            <section id="special-features" className="pt200 pb100 bg-parallax" style={inlineStyle}>
                <div className="color-overlay opacity-8"></div>
                <div className="container">
                    <div className="row">
                        <div className="hero-content color-white col-sm-8 offset-sm-2 text-center">
                            <h2 className="m-30px-b">{getData.title}</h2>
                            <p>
                            {getData.desc}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}



export default PageHeader
