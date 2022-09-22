import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import homedata from '../../data/home.json';



class Screenshot extends Component {

    render() {
        
        let getScreenshots = homedata.screenshots
        let getSectionHeading = getScreenshots.sectionHeading;
        let getScreenshot = getScreenshots.screenshot
        let publicUrl = process.env.PUBLIC_URL

        const options = {
            dots: true,
            autoplay: true,
            loop: true,
            autoplayTimeout: 5000,
            margin: 15,
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1100: {
                    items: 3,
                },
            },
        };

        return     <section id="screenshots" className="pt100 pb100">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-10 offset-lg-3 offset-md-2 offset-sm-1">
                    <div className="section-title text-center mb60">
                        <h2 dangerouslySetInnerHTML={{__html: getSectionHeading.title}}></h2>
                        <hr className="lines"/>
                        <p>{getSectionHeading.desc}</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <OwlCarousel className="screenshots owl-carousel owl-theme zoom-gallery" options={options} >
                        {
                            getScreenshot.map( ( element, i ) => {
                                return(
                                    <div key={i} className="shot-item">
                                        <a className="overlay" href={publicUrl+element.img} title={element.title}>
                                            <img className="img-fluid" src={publicUrl+element.img} alt={element.title}/>
                                            <i className="pe-7s-camera item-icon"></i>
                                        </a>
                                    </div>
                                )
                            } )
                        }
                    </OwlCarousel>
           
                </div>
            </div>
        </div>

    </section>
    }
}


export default Screenshot
