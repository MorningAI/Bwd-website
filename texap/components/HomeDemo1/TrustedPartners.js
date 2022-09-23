import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    nav: false,
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
            items: 2
        },
        450: {
            items: 3
        },
        576: {
            items: 3
        },
        768: {
            items: 4
        },
        992: {
            items: 4
        },
        1200: {
            items: 4
        }
    }
};

const TrustedPartners = () => {

    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            <div className="trusted-by">
                <div className="row align-items-center">
                    <div className="col-lg-2 col-md-12">
                        <span className="title">Trusted by:</span>
                    </div>

                    <div className="col-lg-10 col-md-12">
                        {display ? <OwlCarousel 
                            className="trusted-by-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="item">
                                <img src="/images/partner/partner3.png" alt="partner" />
                            </div>
                            <div className="item">
                                <img src="/images/partner/partner1.png" alt="partner" />
                            </div>
                            <div className="item">
                                <img src="/images/partner/partner5.png" alt="partner" />
                            </div>
                            <div className="item">
                                <img src="/images/partner/partner6.png" alt="partner" />
                            </div>
                            <div className="item">
                                <img src="/images/partner/partner2.png" alt="partner" />
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrustedPartners;