import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, {
    EffectCube, Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCube, Pagination, Navigation]);

const ClientFeedbackStyle2 = () => {
    return (
        <>
            <div className="feedback-area pt-100">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">CLIENT REVIEWS</span>
                        <h2>What Our Customer Say About Us</h2>
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
                        className="feedback-swiper-slides mySwiper"
                    >
                        <SwiperSlide>
                            <div className="single-feedback-item">
                                <div className="client-info">
                                    <img src="/images/user/user1.jpg" alt="user" />
                                    <div className="title">
                                        <h3>Deanna Hodges</h3>
                                        <span>Spotify Developer</span>
                                    </div>
                                </div>

                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                
                                <div className="rating">
                                    <h5>Theme Customization</h5>
                                    <div>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-feedback-item">
                                <div className="client-info">
                                    <img src="/images/user/user2.jpg" alt="user" />
                                    <div className="title">
                                        <h3>Londynn Vargas</h3>
                                        <span>PHP Developer</span>
                                    </div>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                <div className="rating">
                                    <h5>Theme Customization</h5>
                                    <div>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-feedback-item">
                                <div className="client-info">
                                    <img src="/images/user/user3.jpg" alt="user" />
                                    <div className="title">
                                        <h3>James Andy</h3>
                                        <span>Moodle Developer</span>
                                    </div>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                <div className="rating">
                                    <h5>Theme Customization</h5>
                                    <div>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-line"></i>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default ClientFeedbackStyle2;