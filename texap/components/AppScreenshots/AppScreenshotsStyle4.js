import React from 'react';
import Link from 'next/link';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, {
    EffectCube, Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCube, Pagination, Navigation]);

const AppScreenshotsStyle4 = () => {
    return (
        <>
            <div className="screenshots-area bg-black ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">APP SCREENS</span>
                        <h2>Beautifully Crafted All App Screenshots</h2>
                    </div>

                    <Swiper 
                        effect={'cube'} 
                        grabCursor={true} 
                        cubeEffect={{
                            "shadow": true,
                            "slideShadows": true,
                            "shadowOffset": 20,
                            "shadowScale": 0.94
                        }}
                        loop={true}
                        navigation={true} 
                        className="screen-swiper-slides mySwiper"
                    >
                        <SwiperSlide>
                            <img src="/images/screenshots/screen2.jpg" alt="screen" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/screenshots/screen3.jpg" alt="screen" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/screenshots/screen4.jpg" alt="screen" />
                        </SwiperSlide>
                    </Swiper>

                    <div className="free-trial-btn">
                        <Link href="/sign-in">
                            <a className="default-btn">Start Free Trial</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppScreenshotsStyle4;