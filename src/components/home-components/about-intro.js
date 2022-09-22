import React, { Component } from 'react';
import homedata from '../../data/home.json';

class AboutIntro extends Component {
    render() {

        let content = homedata.aboutIntro
        let publicUrl = process.env.PUBLIC_URL

        return <section id="about-intro" className="pt100 pb100">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 text-center md-m-30px-b">
                    <img className="img-fluid" src={publicUrl+content.img} alt={content.title} />
                </div>
                <div className="col-lg-6 aboutIntroText">
                    <h2 className="m-30px-b">{content.title}</h2>
                    <p className="m-50px-b md-m-30px-b">
                        {content.desc}
                    </p>
                    <a href={content.button.btnurl1} className="primary-btn" >{content.button.btn1}</a>
                    <a href={content.button.btnurl1} className="primary-btn primary-btn-2" >Contact us</a>
                </div>
            </div> 
        </div>
    </section>
    }
}


export default AboutIntro
