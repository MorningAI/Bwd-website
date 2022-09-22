import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import homedata from '../../data/home.json';

class Testimonial extends Component {
    render() {

    let testimonialContent = homedata.testimonial
    let sectionHeadingInfo = testimonialContent.sectionHeading
    let getTestimonial = testimonialContent.testimonial
    let publicUrl = process.env.PUBLIC_URL


    // owl Options
    const options = {
        dots: true,
        margin: 15,
        autoplay: true,
        loop: true,
        autoplayTimeout: 5000,
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


        return <section id="testimonial" className="pt100 pb100">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-10 offset-lg-3 offset-md-2 offset-sm-1">
                    <div className="section-title text-center mb60">
                        <h2 dangerouslySetInnerHTML = {{__html: sectionHeadingInfo.title}}></h2>
                        <hr className="lines"/>
                        <p>{sectionHeadingInfo.desc}</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <OwlCarousel className="testimonials owl-carousel owl-theme" options={options} >
                        {
                            getTestimonial.map( ( element, i ) => {
                                return(
                                <div key={i} className="testimonial-item">
                                    <blockquote>{element.desc}</blockquote>
                                    <div className="client-avater">
                                        <img src={publicUrl+element.img} alt={element.name} />
                                    </div>
                                    <h6>{element.name}</h6>
                                    <p className="company-info">{element.position} <a href={element.compnyUrl}>{element.compnyName}</a>
                                    </p>
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


export default Testimonial
