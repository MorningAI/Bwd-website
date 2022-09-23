import React from 'react'
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    nav: true,
    loop: true,
    margin: 25,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        "<i class='ri-arrow-left-s-line'></i>",
        "<i class='ri-arrow-right-s-line'></i>",
    ],
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
};

const ClientFeedbackStyle6 = () => {

    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            <div className="testimonials-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12">
                            <div className="testimonials-image">
                                <img src="/images/woman.jpg" alt="testimonials" />
                            </div>
                        </div>
                        
                        <div className="col-lg-8 col-md-12">
                            <div className="testimonials-content">
                                <span className="sub-title">CLIENT REVIEWS</span>
                                <h2>Customer Reviews About Our App</h2>
                            </div>

                            {display ? <OwlCarousel 
                                className="testimonials-slides owl-carousel owl-theme"
                                {...options}
                            > 
                                <div className="content">
                                    <h3>Londynn Vargas</h3>
                                    <span>Spotify Developer</span>
                                    <p>Texap is the best digital agency in our area As a midsize software developent company we combine the best of both worlds. We have the focus and speed of the small it outsurcing companies.</p>
                                </div>
                                <div className="content">
                                    <h3>James Andy</h3>
                                    <span>PHP Developer</span>
                                    <p>Texap is the best digital agency in our area As a midsize software developent company we combine the best of both worlds. We have the focus and speed of the small it outsurcing companies.</p>
                                </div>
                                <div className="content">
                                    <h3>Sarah Taylor</h3>
                                    <span>JavaScript Developer</span>
                                    <p>Texap is the best digital agency in our area As a midsize software developent company we combine the best of both worlds. We have the focus and speed of the small it outsurcing companies.</p>
                                </div>
                            </OwlCarousel> : ''}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientFeedbackStyle6;